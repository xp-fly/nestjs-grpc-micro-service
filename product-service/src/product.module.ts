import {Module} from '@nestjs/common';
import {ConfigModule} from 'nestjs-configure';
import {ProductController} from "./controllers/product.controller";

@Module({
  imports: [ConfigModule.load()],
  controllers: [ProductController],
  providers: [],
})
export class ProductModule {
}
