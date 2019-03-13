import {Controller} from "@nestjs/common";
import {GrpcMethod} from '@nestjs/microservices'
import {product_module} from "../protobufs/grpc-service-interface";
import {Observable} from "rxjs";

@Controller()
export class OrderController implements product_module.OrderService{
  @GrpcMethod('OrderService')
  getList(request: product_module.QueryListRequest): Observable<product_module.OrderDataResponse> {
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
