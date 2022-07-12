import { NestFactory } from '@nestjs/core';
import { join } from 'path';

import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  
  await app.listen(3002);
}
bootstrap();
