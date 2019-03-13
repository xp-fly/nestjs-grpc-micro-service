import {Module} from '@nestjs/common';
import {OrderController} from "./controllers/order.controller";

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [],
})
export class OrderModule {
}
