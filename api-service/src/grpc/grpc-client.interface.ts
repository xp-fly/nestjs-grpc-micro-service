/**
 * grpc 的服务配置
 */
export interface GrpcClientServiceConfig {
  package: string; // 模块名
  url: string; // ip + 短裤
  services: string[]; // 服务名数组
}

export interface GrpcClientPackageServices {
  package: string; // 模块名
  services: string[]; // 服务名数组
}
