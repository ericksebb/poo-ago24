// src/customers/dto/create-customer.dto.ts
import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty()
  @IsString()
  customerName: string;

  @ApiProperty()
  @IsString()
  contactName: string;

  @ApiProperty()
  @IsString()
  contactPhone: string;

  @ApiProperty()
  @IsString()
  contactEmail: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  address?: string;
}
