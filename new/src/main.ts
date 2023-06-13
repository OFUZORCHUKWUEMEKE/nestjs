import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExtensionFilter } from './common/filters/http-extension/http-extension.filter';
import { ApiKeyGuard } from './common/guards/api-key/api-key.guard';
import { DocumentBuilder ,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use()
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    transform:true,
    forbidNonWhitelisted:true
  }))
  const options = new DocumentBuilder().setTitle('I Love Typescript').setDescription('I Love Typescript').setVersion('1.0').build();

  const document = SwaggerModule.createDocument(app,options)

  SwaggerModule.setup('api',app,document)
  // app.useGlobalGuards(new ApiKeyGuard())
  app.useGlobalFilters(new HttpExtensionFilter())
  await app.listen(5000);
}
bootstrap();
