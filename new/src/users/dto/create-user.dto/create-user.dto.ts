import { IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    name:string

    @IsString()
    brand:string

    @IsString({each:true})
    flavors:string[]
}
