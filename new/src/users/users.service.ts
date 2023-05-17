import { HttpException, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users:User[] =[{
        id:1,
        name:'Ofuzor Chukwuemeke',
        brand:'Software Developer',
        flavors:['Nestjs' ,'jAVASCRIPT','nodejs']
    }]
   
    findAll(){
        return this.users
    }

    findOne(id:string){
        const user = this.users.find(item =>item.id=== +id)
        if(!user){
            throw new HttpException('No data was found for this record' , 404)
        }
    }
}
