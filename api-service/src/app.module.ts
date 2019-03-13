import {Module} from '@nestjs/common';
import {UserModule} from "./modules/user/user.module";
import {ConfigModule} from 'nestjs-configure';

@Module({
  imports: [ConfigModule.load(), UserModule],
})
export class AppModule {
}
