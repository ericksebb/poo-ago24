import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { RawMaterial } from '@prisma/client';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { UpdateRawMaterialDto } from './dto/update-raw-material.dto';

@Injectable()
export class RawMaterialsService extends BaseService<
  RawMaterial,
  CreateRawMaterialDto,
  UpdateRawMaterialDto
> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'rawMaterial' });
  }
}
