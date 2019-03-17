import {Controller, Get} from "@nestjs/common";
import {InjectGrpcClientService} from "nestjs-grpc-client";
import {product_module} from "../../../grpc/service-interface";

@Controller('product')
export class ProductController {

  constructor(
    @InjectGrpcClientService('product_module', 'ProductService')
    private readonly productService: product_module.ProductService
  ) {}

  @Get()
  async getList() {
    return await this.productService.getList({
      pageNo: 1,
      pageSize: 10,
    });
  }
}
