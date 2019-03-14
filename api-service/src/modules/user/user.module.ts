import {Module} from "@nestjs/common";
import {UserService} from "./services/user.service";
import {UserController} from "./controllers/user.controller";
import {GrpcClientModule} from "../../grpc/grpc-client.module";

@Module({
  imports: [GrpcClientModule.forClientServices([{
    package: 'user_module',
    services: ['UserService']
  }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
}
