import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { Customer } from '@prisma/client';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService extends BaseService<
  Customer,
  CreateCustomerDto,
  UpdateCustomerDto
> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'customer' });
  }
}
