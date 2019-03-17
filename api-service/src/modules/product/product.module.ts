import {Module} from "@nestjs/common";
import {ProductController} from "./controllers/product.controller";
import {GrpcClientModule} from "nestjs-grpc-client";

@Module({
  imports: [GrpcClientModule.forClientServices([
    {package: 'product_module', services: ['ProductService']}
  ])],
  controllers: [ProductController]
})
export class ProductModule {}
