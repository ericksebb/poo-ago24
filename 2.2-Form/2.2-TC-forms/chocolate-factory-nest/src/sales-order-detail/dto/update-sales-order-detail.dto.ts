import { PartialType } from '@nestjs/swagger';
import { CreateSalesOrderDetailDto } from './create-sales-order-detail.dto';

export class UpdateSalesOrderDetailDto extends PartialType(CreateSalesOrderDetailDto) {}
