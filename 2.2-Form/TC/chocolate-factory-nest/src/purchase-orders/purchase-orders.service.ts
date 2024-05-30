import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { PurchaseOrder } from '@prisma/client';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';

@Injectable()
export class PurchaseOrdersService extends BaseService<
  PurchaseOrder,
  CreatePurchaseOrderDto,
  UpdatePurchaseOrderDto
> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'purchaseOrder' });
  }
}
