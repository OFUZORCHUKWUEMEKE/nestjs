import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCoffeeDto } from './dto/update.dto/update.dto';
import { CreateCoffeeDto } from './dto/create-user.dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Coffee) private coffeRepository:Repository<Coffee>){}
  
    async findAll():Promise<Coffee[]>{
        return this.coffeRepository.find({})
    }

    async findOne(id:any){
        const coffee = await this.coffeRepository.findOne(id)
        if(!coffee){
            throw new HttpException('No data was found for this record' , 404)
        }
    }

    create(createCoffeeDto:CreateCoffeeDto){
       const coffee = this.coffeRepository.create(createCoffeeDto)
       return this.coffeRepository.save(coffee)
    }

    async update(id:string ,updateCoffeeDto:UpdateCoffeeDto){
        const existingCoffee = await this.coffeRepository.preload({
            id:+id,
            ...updateCoffeeDto
        })
        if(!existingCoffee){
            throw new NotFoundException(`Coffee ${id} not found in the database `)
        }
        return this.coffeRepository.save(existingCoffee)
    }

    async remove(id){
        const coffee = await this.coffeRepository.findOne(id)
        return this.coffeRepository.remove(coffee)
    }
}
