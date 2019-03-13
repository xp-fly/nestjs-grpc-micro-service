import {Controller, Inject} from "@nestjs/common";
import {GrpcMethod} from "@nestjs/microservices"
import {UserServiceLogin} from "../interfaces/user.interface";
import {UserService} from "../services/user.service";

@Controller()
export class UserController {
  @Inject()
  private userService: UserService;

  @GrpcMethod('UserService')
  async login(payload: UserServiceLogin) {
    const token = this.userService.login(payload);
    return {code: 200, message: 'login success', data: token};
  }
}
