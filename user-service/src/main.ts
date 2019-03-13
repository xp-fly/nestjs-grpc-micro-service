import {NestFactory} from '@nestjs/core';
import {UserModule} from './user.module';
import {Transport} from "@nestjs/common/enums/transport.enum";
import {join} from "path";
import {ConfigModule} from "nestjs-configure";
import {Logger} from '@nestjs/common';

async function bootstrap() {
  const port = ConfigModule.get('port');
  const logger = new Logger('ProductService');
  const app = await NestFactory.createMicroservice(UserModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:' + port,
      package: 'user_module',
      protoPath: join(__dirname, 'protobufs/user-module.proto'),
      loader: {
        arrays: true
      }
    }
  });
  await app.listenAsync();
  logger.log('Production service started at : ' + port);
}

bootstrap();
