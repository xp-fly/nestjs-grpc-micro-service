import {Module} from "@nestjs/common";
import {GrpcClientModule} from "../../grpc/grpc-client.module";
import {OrderController} from "./controllers/order.controller";

@Module({
  imports: [GrpcClientModule.forClientServices([
    {package: 'order_module', services: ['OrderService']}
  ])],
  controllers: [OrderController],
})
export class OrderModule {

}
