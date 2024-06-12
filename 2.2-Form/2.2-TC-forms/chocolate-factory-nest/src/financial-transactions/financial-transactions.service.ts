import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { FinancialTransaction } from '@prisma/client';
import { CreateFinancialTransactionDto } from './dto/create-financial-transaction.dto';
import { UpdateFinancialTransactionDto } from './dto/update-financial-transaction.dto';

@Injectable()
export class FinancialTransactionsService extends BaseService<
  FinancialTransaction,
  CreateFinancialTransactionDto,
  UpdateFinancialTransactionDto
> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'financialTransaction' });
  }
}
