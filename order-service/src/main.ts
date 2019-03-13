import {NestFactory} from '@nestjs/core';
import {OrderModule} from './order.module';
import {ConfigModule} from 'nestjs-configure';
import {Logger} from "@nestjs/common";
import {Transport} from '@nestjs/common/enums/transport.enum';
import {join} from 'path';

async function bootstrap() {
  const port = ConfigModule.get('port');
  const logger = new Logger('OrderService');
  const app = await NestFactory.createMicroservice(OrderModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:' + port,
      package: 'order_module',
      protoPath: join(__dirname, 'protobufs/order-module.proto'),
      loader: {
        arrays: true
      }
    }
  });
  await app.listenAsync();
  logger.log('OrderService started at: ' + port);
}

bootstrap();
