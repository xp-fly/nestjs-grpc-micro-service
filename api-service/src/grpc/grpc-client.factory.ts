import {Injectable} from "@nestjs/common";
import {Transport} from "@nestjs/common/enums/transport.enum";
import {join} from "path";
import {ClientGrpc, Client} from '@nestjs/microservices'
import {GrpcOptions} from "@nestjs/common/interfaces/microservices/microservice-configuration.interface";

@Injectable()
export class GrpcClientFactory {
  @Client(generateGrpcOptions('localhost:50051', 'user_module', 'user-module.proto'))
  public readonly userModuleClient: ClientGrpc;
}

export function generateGrpcOptions(url: string, packageName: string, protoFileName: string): GrpcOptions {
  return {
    transport: Transport.GRPC,
    options: {
      url,
      package: packageName,
      protoPath: join(__dirname, 'protobufs/' + protoFileName),
      loader: {
        arrays: true
      }
    }
  }
}
