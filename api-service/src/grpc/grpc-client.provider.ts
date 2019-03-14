import {ClientGrpcProxy, ClientProxyFactory, GrpcOptions} from '@nestjs/microservices';
import {Provider} from "@nestjs/common";
import {getServiceToken, getToken} from "./utils";
import {ConfigService} from "nestjs-configure";
import {GrpcClientPackageServices, GrpcClientServiceConfig} from "./grpc-client.interface";
import {
  GrpcClientPackageConfiNotFound,
  GrpcClientPackageNotFound,
  GrpcClientPackageServiceNotFound,
  GrpcClientServiceConfigNotFound
} from "./grpc-client.exception";

const clients: Map<string, ClientGrpcProxy> = new Map();

/**
 * grpc 客户端提供者
 */
export class GrpcClientProvider {
  /**
   * 获取连接
   * @param options
   */
  static register(options: GrpcOptions[]): Provider[] {
    const providers: Provider[] = [];
    for (const option of options) {
      // grcp 的模块名
      const packageName = option.options.package;
      const providerToken = getToken(packageName);
      // 如果已经创建，则直接返回已经创建的
      if (clients.get(packageName)) {
        providers.push({
          provide: providerToken,
          useValue: clients.get(packageName),
        });
      } else {
        providers.push({
          provide: providerToken,
          useFactory: (configService: ConfigService) => {
            // 获取配置
            const configs: GrpcClientServiceConfig[] = configService.get('grpcService');
            if (!configs) {
              throw new GrpcClientServiceConfigNotFound();
            }
            const config = configs.find(item => item.package === packageName);
            if (!config) {
              throw new GrpcClientPackageConfiNotFound(packageName);
            }
            option.options.url = config.url;;
            // 创建连接
            const client: any = ClientProxyFactory.create(option);
            clients.set(packageName, client);
            return client;
          },
          inject: [ConfigService],
        });
      }
    }
    return providers;
  }


  /**
   * 获取服务
   * @param services
   */
  static getServices(services: GrpcClientPackageServices[]): Provider[] {

    const providers: Provider[] = [];
    for (const service of services) {
      for (const serviceName of service.services) {
        providers.push({
          provide: getServiceToken(service.package, serviceName),
          useFactory: (client: ClientGrpcProxy) => {
            if (!client) {
              throw new GrpcClientPackageNotFound(service.package);
            }
            const grpcService = clients.get(service.package).getService(serviceName);
            if (!grpcService) {
              throw new GrpcClientPackageServiceNotFound(service.package, serviceName);
            }
            return grpcService;
          },
          inject: [getToken(service.package)]
        });
      }
    }
    return providers;
  }
}
