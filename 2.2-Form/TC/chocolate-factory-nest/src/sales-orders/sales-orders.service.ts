import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { SalesOrder } from '@prisma/client';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto';
import { UpdateSalesOrderDto } from './dto/update-sales-order.dto';

@Injectable()
export class SalesOrdersService extends BaseService<
  SalesOrder,
  CreateSalesOrderDto,
  UpdateSalesOrderDto
> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'salesOrder' });
  }
}
