import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "../create-user.dto/create-user.dto";

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
    
}
