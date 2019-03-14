import {Module} from "@nestjs/common";
import {ProductController} from "./controllers/product.controller";
import {GrpcClientModule} from "../../grpc/grpc-client.module";

@Module({
  imports: [GrpcClientModule.forClientServices([
    {package: 'product_module', services: ['ProductService']}
  ])],
  controllers: [ProductController]
})
export class ProductModule {}
