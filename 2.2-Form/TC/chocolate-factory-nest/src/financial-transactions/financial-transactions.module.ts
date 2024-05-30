import { Module } from '@nestjs/common';
import { FinancialTransactionsService } from './financial-transactions.service';
import { FinancialTransactionsController } from './financial-transactions.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [FinancialTransactionsController],
  providers: [FinancialTransactionsService],
  imports: [PrismaModule],
})
export class FinancialTransactionsModule {}
