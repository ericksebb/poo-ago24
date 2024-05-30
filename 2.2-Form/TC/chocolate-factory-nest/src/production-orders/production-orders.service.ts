import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { ProductionOrder } from '@prisma/client';
import { CreateProductionOrderDto } from './dto/create-production-order.dto';
import { UpdateProductionOrderDto } from './dto/update-production-order.dto';

@Injectable()
export class ProductionOrdersService extends BaseService<
  ProductionOrder,
  CreateProductionOrderDto,
  UpdateProductionOrderDto
> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'productionOrder' });
  }
}
