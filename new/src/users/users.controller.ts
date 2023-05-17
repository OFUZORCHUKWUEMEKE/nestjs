import { Controller ,Get ,Post ,Body,Param ,HttpCode ,HttpStatus ,Patch, Delete} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userservice:UsersService){}
    @Get()
    getName(){
        // console.log(this.userservice.getName())
        return this.userservice.findAll()
    }

    @Get(':id')
    @HttpCode(HttpStatus.CONTINUE)
    findOne(@Param('id') id) {
        return this.userservice.findOne(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    getPost(@Body('name') body){
        console.log(body)
        return body
    }

    @Patch(':id')
    @HttpCode(HttpStatus.CONTINUE)
    update(@Param('id') id:string,@Body() body){
       return 'Updated a single id'
    }

    @Delete('id')
    @HttpCode(HttpStatus.CONTINUE)
    delete(@Param('id') id:string){
        return 'Item deleted successfully'
    }

}
 