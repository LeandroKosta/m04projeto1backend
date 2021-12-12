import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AnimesModule } from './animes/animes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AnimesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
