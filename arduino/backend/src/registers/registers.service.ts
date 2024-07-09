import { Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RegistersService {
  constructor (private prisma: PrismaService) {}

  create(createRegisterDto: CreateRegisterDto) {
    return this.prisma.register.create({data: createRegisterDto});
  }

  findAll() {
    return this.prisma.register.findMany();
  }

  findOne(id: number) {
    return this.prisma.register.findUnique({where: {id}});
  }

  /* update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return `This action updates a #${id} register`;
  }
 */
  remove(id: number) {
    return this.prisma.register.delete({where: {id}});
  }
}
