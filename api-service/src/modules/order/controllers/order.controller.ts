import {Controller, Get} from "@nestjs/common";
import {InjectGrpcClientService} from 'nestjs-grpc-client';
import {order_module} from "../../../grpc/service-interface";

@Controller('order')
export class OrderController {

  constructor(
    @InjectGrpcClientService('order_module', 'OrderService')
    private readonly orderService: order_module.OrderService,
  ) {}

  @Get()
  async getList() {
    return this.orderService.getList({pageNo: 1, pageSize: 10});
  }
}
