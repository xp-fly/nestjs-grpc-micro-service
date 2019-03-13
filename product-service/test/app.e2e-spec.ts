import { Test, TestingModule } from '@nestjs/testing';
import {Injectable} from "@nestjs/common";
import {Client, ClientGrpc} from '@nestjs/microservices';
import {Transport} from "@nestjs/common/enums/transport.enum";
import {join} from "path";
import {ProductModule} from "../src/product.module";

describe('AppController (e2e)', () => {
  it('grpc response', async () => {
    @Injectable()
    class Testservice {
      @Client({
        transport: Transport.GRPC,
        options: {
          url: 'localhost:8890',
          package: 'product_module',
          protoPath: join(__dirname, '../src/protobufs/product-module.proto'),
          loader: {
            arrays: true
          }
        }
      })
      private grpcClient: ClientGrpc;

      getList() {
        return (this.grpcClient.getService('ProductService') as any).getList({pageNo: 1, pageSize: 10}).toPromise();
      }
    }
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ProductModule],
      providers: [Testservice],
    }).compile();


    const app = moduleFixture.createNestApplication();
    await app.init();

    const testService = moduleFixture.get(Testservice);

    const data = await testService.getList();
    console.log(data);
    expect(data).toBeInstanceOf(Object);
  });
});
