import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RawMaterialsService } from './raw-materials.service';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { UpdateRawMaterialDto } from './dto/update-raw-material.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('raw-materials')
@Controller('raw-materials')
export class RawMaterialsController {
  constructor(private readonly rawMaterialsService: RawMaterialsService) {}

  @Post()
  @ApiOperation({ summary: 'Create raw material' })
  @ApiResponse({
    status: 201,
    description: 'The raw material has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createRawMaterialDto: CreateRawMaterialDto) {
    return this.rawMaterialsService.create(createRawMaterialDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all raw materials' })
  @ApiResponse({ status: 200, description: 'Return all raw materials.' })
  findAll() {
    return this.rawMaterialsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get raw material by id' })
  @ApiResponse({ status: 200, description: 'Return the raw material.' })
  @ApiResponse({ status: 404, description: 'Raw material not found.' })
  findOne(@Param('id') id: string) {
    return this.rawMaterialsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update raw material' })
  @ApiResponse({
    status: 200,
    description: 'The raw material has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Raw material not found.' })
  update(
    @Param('id') id: string,
    @Body() updateRawMaterialDto: UpdateRawMaterialDto,
  ) {
    return this.rawMaterialsService.update(id, updateRawMaterialDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete raw material' })
  @ApiResponse({
    status: 200,
    description: 'The raw material has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Raw material not found.' })
  remove(@Param('id') id: string) {
    return this.rawMaterialsService.remove(id);
  }
}
