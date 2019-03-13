import {Controller} from "@nestjs/common";
import {GrpcMethod} from '@nestjs/microservices';

@Controller()
export class ProductController {
  @GrpcMethod('ProductService')
  async getList() {
    return [{id: 1, name: "产品"}]
  }

}
