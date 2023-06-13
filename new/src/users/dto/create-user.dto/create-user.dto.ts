import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateCoffeeDto {
    @ApiProperty({description:'The name of a Coffee'})
    @IsString()
    name:string
    
    @ApiProperty({description:'The description of the Coffee'})
    @IsString()
    brand:string
    
    @ApiProperty({example:[]})
    @IsString({each:true})
    flavors:string[]
}
