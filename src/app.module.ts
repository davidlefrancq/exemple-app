import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GoogleSigninModule } from './google-signin/google-signin.module';

@Module({
  imports: [UserModule, GoogleSigninModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
