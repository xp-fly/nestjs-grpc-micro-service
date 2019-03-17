import {Module} from '@nestjs/common';
import {UserModule} from "./modules/user/user.module";
import {ConfigModule, ConfigService} from 'nestjs-configure';
import {GrpcClientModule} from "nestjs-grpc-client";
import {generateGrpcOptions} from "./grpc/utils";
import {ProductModule} from "./modules/product/product.module";
import {OrderModule} from "./modules/order/order.module";

@Module({
  imports: [
    ConfigModule.load(),
    // GrpcClientModule.register([
    //   generateGrpcOptions('user_module', 'user-module.proto'),
    //   generateGrpcOptions('product_module', 'product-module.proto'),
    //   generateGrpcOptions('order_module', 'order-module.proto'),
    // ]),
    GrpcClientModule.registerAsync([
      generateGrpcOptions('user_module', 'user-module.proto'),
      generateGrpcOptions('product_module', 'product-module.proto'),
      generateGrpcOptions('order_module', 'order-module.proto'),
    ], {
      useFactory: (configService) => configService.get('grpcService'),
      inject: [ConfigService],
    }),
    UserModule,
    ProductModule,
    OrderModule
  ],
})
export class AppModule {
}
