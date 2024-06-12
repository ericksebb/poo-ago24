import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { RawMaterial } from '@prisma/client';
import { CreateSalesOrderDetailDto } from './dto/create-sales-order-detail.dto';
import { UpdateSalesOrderDetailDto } from './dto/update-sales-order-detail.dto';

@Injectable()
export class SalesOrderDetailsService extends BaseService<
  RawMaterial,
  CreateSalesOrderDetailDto,
  UpdateSalesOrderDetailDto
> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'salesOrderDetail' });
  }
}
