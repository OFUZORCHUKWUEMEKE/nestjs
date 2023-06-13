import { PartialType } from "@nestjs/swagger";
import { CreateCoffeeDto } from "../create-user.dto/create-user.dto";

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
    
}
