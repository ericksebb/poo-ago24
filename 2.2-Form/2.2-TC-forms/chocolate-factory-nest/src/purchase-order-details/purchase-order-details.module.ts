import { Module } from '@nestjs/common';
import { PurchaseOrderDetailsService } from './purchase-order-details.service';
import { PurchaseOrderDetailsController } from './purchase-order-details.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PurchaseOrderDetailsController],
  providers: [PurchaseOrderDetailsService, PrismaService],
})
export class PurchaseOrderDetailsModule {}
