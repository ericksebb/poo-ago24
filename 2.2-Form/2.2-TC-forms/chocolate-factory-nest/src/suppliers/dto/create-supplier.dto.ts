import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSupplierDto {
  @ApiProperty()
  @IsString()
  supplierName: string;

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
