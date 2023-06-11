import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExtensionFilter } from './common/filters/http-extension/http-extension.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use()
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    transform:true,
    forbidNonWhitelisted:true
  }))
  app.useGlobalFilters(new HttpExtensionFilter())
  await app.listen(5000);
}
bootstrap();
