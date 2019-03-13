import {Inject, Injectable, OnModuleInit} from "@nestjs/common";
import {GrpcClientFactory} from "../../../grpc/grpc-client.factory";
import {user_module} from "../../../grpc/service-interface";

@Injectable()
export class UserService implements OnModuleInit {
  onModuleInit() {
    this.userService = this.grpcClientFactory.userModuleClient.getService('UserService');
  }

  constructor(
    @Inject(GrpcClientFactory) private grpcClientFactory: GrpcClientFactory,
  ) {
  }

  private userService: user_module.UserService;

  async login(body) {
    return await this.userService.login(body);
  }
}
