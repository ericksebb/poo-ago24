import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { Supplier } from '@prisma/client';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SuppliersService extends BaseService<
  Supplier,
  CreateSupplierDto,
  UpdateSupplierDto
> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'supplier' });
  }
}
