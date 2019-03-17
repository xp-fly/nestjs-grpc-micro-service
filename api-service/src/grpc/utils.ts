import {GrpcOptions} from "@nestjs/common/interfaces/microservices/microservice-configuration.interface";
import {Transport} from "@nestjs/common/enums/transport.enum";
import {join} from "path";

/**
 * 生成grpc的配置
 * @param packageName
 * @param protoFileName
 */
export function generateGrpcOptions(packageName: string, protoFileName: string, url?: string): GrpcOptions {
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
