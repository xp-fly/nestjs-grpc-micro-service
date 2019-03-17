import {Injectable} from "@nestjs/common";
import {user_module} from "../../../grpc/service-interface";
import {InjectGrpcClient} from "nestjs-grpc-client";
import {ClientGrpcProxy} from "@nestjs/microservices";

@Injectable()
export class UserService {

  constructor(
    @InjectGrpcClient('user_module') private grpcClient: ClientGrpcProxy,
  ) {
  }

  async login(body) {
    const userService: user_module.UserService = this.grpcClient.getService('UserService');
    return await userService.login(body);
  }
}
