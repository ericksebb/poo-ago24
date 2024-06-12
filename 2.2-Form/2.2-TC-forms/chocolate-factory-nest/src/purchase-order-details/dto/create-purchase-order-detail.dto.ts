import { IsNumber, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseOrderDetailDto {
  @ApiProperty()
  @IsUUID()
  purchaseOrderId: string;

  @ApiProperty()
  @IsUUID()
  materialId: string;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  unitPrice: number;
}
