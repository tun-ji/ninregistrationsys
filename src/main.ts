import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//To make it a NestExpress app
import { NestExpressApplication } from '@nestjs/platform-express'

import { join } from 'path'

import * as nunjucks from 'nunjucks'


async function bootstrap() {

  
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    );

  const express = app.getHttpAdapter().getInstance();
  const staticAssets = join(__dirname, '..', 'static')
  app.useStaticAssets(staticAssets);

  const views = join(__dirname, '..', 'views')

  nunjucks.configure(views, { express })
  app.set('view engine', 'html');
  await app.listen(3000);
}
bootstrap();
