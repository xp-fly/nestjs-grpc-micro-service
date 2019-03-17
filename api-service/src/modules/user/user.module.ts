import {Module} from "@nestjs/common";
import {UserService} from "./services/user.service";
import {UserController} from "./controllers/user.controller";
import {GrpcClientModule} from "nestjs-grpc-client";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
}
