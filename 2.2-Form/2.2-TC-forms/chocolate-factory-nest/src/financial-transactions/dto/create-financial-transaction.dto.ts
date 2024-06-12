import {
  IsString,
  IsNumber,
  IsDate,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFinancialTransactionDto {
  @ApiProperty()
  @IsDate()
  transactionDate: Date;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsString()
  transactionType: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsUUID()
  referenceId: string;

  @ApiProperty()
  @IsString()
  referenceType: string;
}
