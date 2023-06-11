import { Controller ,Get ,Post ,Body,Param ,HttpCode ,HttpStatus ,Patch, Delete, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateCoffeeDto } from './dto/create-user.dto/create-user.dto';
import { UpdateCoffeeDto } from './dto/update.dto/update.dto';
import { PaginationQueryDto } from 'src/common/pagination-query.dto';
import { Public } from 'src/common/decorators/public.decorator';

@UsePipes(ValidationPipe)
@Controller('coffee')
export class UsersController {
    constructor(private readonly userservice:UsersService){}
    
    @Public()
    @Get('')
    @HttpCode(HttpStatus.ACCEPTED)
    findAll(@Query() paginationQuery:PaginationQueryDto){
        return this.userservice.findAll(paginationQuery)
    }
 

    @Get(':id')
    @HttpCode(HttpStatus.CONTINUE)
    findOne(@Param('id') id) {
        console.log(id)
        return this.userservice.findOne(id)
    }

    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    get(@Body() createbodyDto:CreateCoffeeDto){
        return this.userservice.create(createbodyDto)
    }

    @Patch(':id')
    @HttpCode(HttpStatus.CONTINUE)
    update(@Param('id') id:string,@Body() body:UpdateCoffeeDto){
       return this.userservice.update(id,body)
    }

    @Delete('id')
    @HttpCode(HttpStatus.CONTINUE)
    delete(@Param('id') id:string){
        return this.userservice.remove(id)
    }

}
 