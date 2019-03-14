import {Inject} from "@nestjs/common";
import {getServiceToken, getToken} from "../utils";

/**
 * 注入 grpc 的客户端
 * @param packageName
 * @constructor
 */
export function InjectGrpcClient(packageName: string) {
  return Inject(getToken(packageName));
}

/**
 * 注入 grpc 的客户端的服务
 * @param serviceName
 * @constructor
 */
export function InjectGrpcClientService(packageName: string, serviceName: string) {
  return Inject(getServiceToken(packageName, serviceName))
}
