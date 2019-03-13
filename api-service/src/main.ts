import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger} from "@nestjs/common";
import {ConfigService} from 'nestjs-configure';

async function bootstrap() {
  const logger = new Logger('ApiService');
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  await app.listen(configService.get('port'), '0.0.0.0', () => {
    logger.log(`ApiService started on: ${configService.get('port')}`);
  });
}

bootstrap();
