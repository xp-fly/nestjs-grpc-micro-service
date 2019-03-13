import {NestFactory} from '@nestjs/core';
import {ProductModule} from './product.module';
import {ConfigModule} from 'nestjs-configure';
import {join} from "path";
import {Transport} from "@nestjs/common/enums/transport.enum";
import {Logger} from "@nestjs/common";

async function bootstrap() {
  const port = ConfigModule.get('port');
  const logger = new Logger('ProductService');
  const app = await NestFactory.createMicroservice(ProductModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:' + port,
      package: 'product_module',
      protoPath: join(__dirname, 'protobufs/product-module.proto'),
      loader: {
        arrays: true
      }
    }
  });
  await app.listenAsync();
  logger.log('product service started at: ' + port);
}

bootstrap();
