import { IsString, IsNumber, IsDate, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSalesOrderDto {
  @ApiProperty()
  @IsDate()
  orderDate: Date;

  @ApiProperty()
  @IsNumber()
  totalAmount: number;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsUUID()
  customerId: string;
}
