import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/user.entity';
import { Flavor } from './entities/flavor.entity/flavor.entity';

@Module(
    {
        imports:[TypeOrmModule.forFeature([Coffee,Flavor])],
        controllers: [UsersController],
        providers: [UsersService]
    }
)
                
export class UsersModule {}
