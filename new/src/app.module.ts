import { Module,ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import Joi from '@hapi/joi';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [UsersModule,TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:"postgres",
    password:'ofuzor2001',
    database:'postgres',
    autoLoadEntities:true,
    synchronize:true
  }), DatabaseModule,ConfigModule.forRoot({
    envFilePath:'.enviroment',
    // SCHEMA VALIDATION
    // validationSchema:Joi.object({
    //   DATABASE_HOST:Joi.required(),
    //   DATABASE_PORT:Joi.number().default(5432)
    // })
    // ignoreEnvFile:true
  })],
  controllers: [AppController],
  providers: [AppService,{
    provide:APP_PIPE,
    useClass:ValidationPipe,
  }],
})
export class AppModule {}
