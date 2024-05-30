import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { PurchaseOrderDetail } from '@prisma/client';
import { CreatePurchaseOrderDetailDto } from './dto/create-purchase-order-detail.dto';
import { UpdatePurchaseOrderDetailDto } from './dto/update-purchase-order-detail.dto';

@Injectable()
export class PurchaseOrderDetailsService extends BaseService<
  PurchaseOrderDetail,
  CreatePurchaseOrderDetailDto,
  UpdatePurchaseOrderDetailDto
> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'purchaseOrderDetail' });
  }
}
