/**
 * 不存在grpc服务的配置文件
 */
export class GrpcClientServiceConfigNotFound extends Error {
  constructor() {
    super();
    this.message = 'grpcService config not found, please set in .env or bootstrap.yml';
    this.name = 'GrpcClientServiceConfigNotFound';
  }
}

/**
 * 不存在 package 对应的client
 */
export class GrpcClientPackageNotFound extends Error {
  constructor(packageName: string) {
    super();
    this.message = `the package\`s client not exist, please register first. package: ${packageName}`;
    this.name = 'GrpcClientPackageNotFound';
  }
}


/**
 * cant`t find service in package
 */
export class GrpcClientPackageServiceNotFound extends Error {
  constructor(packageName: string, serviceName: string) {
    super();
    this.message = `this service: ${serviceName} not exists in package: ${packageName}`;
    this.name = 'GrpcClientPackageServiceNotFound';
  }
}

export class GrpcClientPackageConfiNotFound extends Error {
  constructor(packageName: string) {
    super();
    this.message = `cant find package setting in config. package: ${packageName}`;
    this.name = 'GrpcClientPackageConfiNotFound';
  }
}
