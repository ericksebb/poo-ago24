import { IsString, IsNumber, IsDate, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductionOrderDto {
  @ApiProperty()
  @IsDate()
  orderDate: Date;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsUUID()
  productId: string;

  @ApiProperty()
  @IsUUID()
  employeeId: string;
}
