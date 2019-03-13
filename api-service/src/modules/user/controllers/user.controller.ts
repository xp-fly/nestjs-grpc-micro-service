import {Body, Controller, Post} from "@nestjs/common";
import {UserService} from "../services/user.service";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post('login')
  async login(@Body() body) {
    const result = await this.userService.login(body);
    console.log(result);
    return result;
  }
}
