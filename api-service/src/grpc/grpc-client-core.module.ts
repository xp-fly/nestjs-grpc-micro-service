import {Global, Module} from "@nestjs/common";
import {GrpcClientProvider} from "./grpc-client.provider";
import {GrpcOptions} from "@nestjs/microservices";

// 注册为全局模块，可以在任何地方注册连接

@Global()
@Module({})
export class GrpcClientCoreModule {
  /**
   * 注册连接
   * @param options
   */
  static register(options: GrpcOptions[]) {
    const providers = GrpcClientProvider.register(options);
    return {
      module: GrpcClientCoreModule,
      providers: providers,
      exports: providers,
    };
  }
}
