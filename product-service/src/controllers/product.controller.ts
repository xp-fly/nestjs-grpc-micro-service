import {Controller} from "@nestjs/common";
import {GrpcMethod} from '@nestjs/microservices';
import {Observable} from "rxjs";
import {product_module} from "../protobufs/grpc-service-interface";

@Controller()
export class ProductController implements product_module.ProductService{
  @GrpcMethod('ProductService')
  getList(request: product_module.QueryListRequest): Observable<product_module.ProductDataResponse> {
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
