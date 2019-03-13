import {NestFactory} from '@nestjs/core';
import {OrderModule} from './order.module';
import {ConfigModule} from 'nestjs-configure';
import {Logger} from "@nestjs/common";

async function bootstrap() {
  const port = ConfigModule.get('port');
  const logger = new Logger('OrderService');
  const app = await NestFactory.createMicroservice(OrderModule);
  await app.listenAsync();
  logger.log('OrderService started at: ' + port);
}

bootstrap();
