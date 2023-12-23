import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { GITHUB_ACCESS_TOKEN } from './app.constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (!GITHUB_ACCESS_TOKEN) {
    throw new Error('GITHUB_ACCESS_TOKEN is not defined');
  }

  await app.listen(3000);
}
bootstrap();
