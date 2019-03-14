import {Controller} from "@nestjs/common";
import {GrpcMethod} from '@nestjs/microservices'
import {order_module} from "../protobufs/grpc-service-interface";
import {Observable} from "rxjs";

@Controller()
export class OrderController implements order_module.OrderService{
  @GrpcMethod('OrderService')
  getList(request: order_module.QueryListRequest): Observable<order_module.OrderDataResponse> {
    return {
      code: 200,
      message: 'success',
      data: [{
        id: 1,
        name: 'order'
      }]
    } as any;
  }
}
