import {Controller} from "@nestjs/common";
import {GrpcMethod} from '@nestjs/microservices'
import {product_module} from "../protobufs/grpc-service-interface";

@Controller()
export class OrderController {
  @GrpcMethod('OrderService')
  async getList(param: product_module.QueryListRequest) {
    console.log(param);
    return [{
      id: 1,
      name: '订单',
    }];
  }
}
