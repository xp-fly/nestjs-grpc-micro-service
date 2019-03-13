import {Controller} from "@nestjs/common";
import {GrpcMethod} from '@nestjs/microservices';
import {product_module} from "../../../order-service/src/protobufs/grpc-service-interface";
import {Observable} from "rxjs";

@Controller()
export class ProductController implements product_module.OrderService{
  @GrpcMethod('ProductService')
  getList(request: product_module.QueryListRequest): Observable<product_module.OrderDataResponse> {
    return {
      code: 200,
      message: 'success',
      data: [{
        id: 1,
        name: '订单'
      }]
    } as any;
  }
}
