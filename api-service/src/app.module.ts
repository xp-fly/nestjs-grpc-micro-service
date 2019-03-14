import {Module} from '@nestjs/common';
import {UserModule} from "./modules/user/user.module";
import {ConfigModule} from 'nestjs-configure';
import {GrpcClientModule} from "./grpc/grpc-client.module";
import {generateGrpcOptions} from "./grpc/utils";
import {ProductModule} from "./modules/product/product.module";
import {OrderModule} from "./modules/order/order.module";

@Module({
  imports: [
    ConfigModule.load(),
    GrpcClientModule.register([
      generateGrpcOptions('user_module', 'user-module.proto'),
      generateGrpcOptions('product_module', 'product-module.proto'),
      generateGrpcOptions('order_module', 'order-module.proto'),
    ]),
    UserModule,
    ProductModule,
    OrderModule
  ],
})
export class AppModule {
}
