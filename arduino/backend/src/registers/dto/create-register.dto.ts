import { IsAlphanumeric } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRegisterDto {
    @ApiProperty()
    @IsAlphanumeric()
    name: string;

    @ApiProperty()
    sensor_id: number;
    
}
