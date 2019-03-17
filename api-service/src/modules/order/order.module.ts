import {Module} from "@nestjs/common";
import {GrpcClientModule} from "nestjs-grpc-client";
import {OrderController} from "./controllers/order.controller";

@Module({
  imports: [GrpcClientModule.forClientServices([
    {package: 'order_module', services: ['OrderService']}
  ])],
  controllers: [OrderController],
})
export class OrderModule {

}
