import {Module} from "@nestjs/common";
import {GrpcClientFactory} from "../../grpc/grpc-client.factory";
import {UserService} from "./services/user.service";
import {UserController} from "./controllers/user.controller";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [GrpcClientFactory, UserService],
})
export class UserModule {
}
