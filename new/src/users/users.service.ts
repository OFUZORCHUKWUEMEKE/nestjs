import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCoffeeDto } from './dto/update.dto/update.dto';
import { CreateCoffeeDto } from './dto/create-user.dto/create-user.dto';
import { PaginationQueryDto } from 'src/common/pagination-query.dto';

@Injectable()
export class UsersService {
    // [x: string]: any;
    constructor(@InjectRepository(Coffee) private coffeRepository: Repository<Coffee>) { }

    async findAll(paginationQuery:PaginationQueryDto): Promise<Coffee[]> {
        const {limit,offset} = paginationQuery
        return this.coffeRepository.find({
            relations: ['flavors'],
            skip:offset,
            take:limit
        })
    }

    async findOne(id: any) {
        const coffee = await this.coffeRepository.find({relations:['flavors'],where:{id:+id}})
        if (!coffee) {
            throw new HttpException('No data was found for this record', 404)
        }
    }

    create(createCoffeeDto: CreateCoffeeDto) {
        const coffee = this.coffeRepository.create(createCoffeeDto)
        return this.coffeRepository.save(coffee)
    }

    async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
        const existingCoffee = await this.coffeRepository.preload({
            id: +id,
            ...updateCoffeeDto
        })
        if (!existingCoffee) {
            throw new NotFoundException(`Coffee ${id} not found in the database `)
        }
        return this.coffeRepository.save(existingCoffee)
    }

    async remove(id) {
        const coffee = await this.coffeRepository.findOne(id)
        return this.coffeRepository.remove(coffee)
    }
}
