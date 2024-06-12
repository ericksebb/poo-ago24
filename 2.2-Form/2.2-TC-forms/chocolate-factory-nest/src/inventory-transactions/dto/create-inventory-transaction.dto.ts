import {
  IsString,
  IsNumber,
  IsDate,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryTransactionDto {
  @ApiProperty()
  @IsDate()
  transactionDate: Date;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsString()
  transactionType: string;

  @ApiProperty({ required: false })
  @IsUUID()
  @IsOptional()
  productId?: string;

  @ApiProperty({ required: false })
  @IsUUID()
  @IsOptional()
  materialId?: string;
}
