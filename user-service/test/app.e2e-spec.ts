import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from './../src/user.module';
import {Injectable} from "@nestjs/common";
import {Client, ClientGrpc} from '@nestjs/microservices';
import {Transport} from "@nestjs/common/enums/transport.enum";
import {join} from "path";

describe('AppController (e2e)', () => {
  it('grpc response', async () => {
    @Injectable()
    class Testservice {
      @Client({
        transport: Transport.GRPC,
        options: {
          url: 'localhost:8891',
          package: 'user_module',
          protoPath: join(__dirname, '../src/protobufs/user-module.proto'),
          loader: {
            arrays: true
          }
        }
      })
      private grpcClient: ClientGrpc;

      getToken() {
        return (this.grpcClient.getService('UserService') as any).login({username: 'test', password: 'admin'}).toPromise();
      }
    }
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
      providers: [Testservice],
    }).compile();


    const app = moduleFixture.createNestApplication();
    await app.init();

    const testService = moduleFixture.get(Testservice);

    const token = await testService.getToken();
    console.log(token);
    expect(token).toBeInstanceOf(Object);
  });
});
