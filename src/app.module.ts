import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinRegistrationModule } from './nin-registration/nin-registration.module';

@Module({
  imports: [TypeOrmModule.forRoot(),NinRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
