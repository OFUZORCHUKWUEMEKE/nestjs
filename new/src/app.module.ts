import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { DatabaseModule } from './database/database.module';

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
  }), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
