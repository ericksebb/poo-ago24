import { Module } from '@nestjs/common';
import { SalesOrderDetailsService } from './sales-order-detail.service';
import { SalesOrderDetailsController } from './sales-order-detail.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [SalesOrderDetailsController],
  providers: [SalesOrderDetailsService, PrismaService],
})
export class SalesOrderDetailModule {}
