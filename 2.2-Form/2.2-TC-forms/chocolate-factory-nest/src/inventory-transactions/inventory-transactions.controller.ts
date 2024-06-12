// src/inventory-transactions/inventory-transactions.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventoryTransactionsService } from './inventory-transactions.service';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('inventory-transactions')
@Controller('inventory-transactions')
export class InventoryTransactionsController {
  constructor(
    private readonly inventoryTransactionsService: InventoryTransactionsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create inventory transaction' })
  @ApiResponse({
    status: 201,
    description: 'The inventory transaction has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createInventoryTransactionDto: CreateInventoryTransactionDto) {
    return this.inventoryTransactionsService.create(
      createInventoryTransactionDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all inventory transactions' })
  @ApiResponse({
    status: 200,
    description: 'Return all inventory transactions.',
  })
  findAll() {
    return this.inventoryTransactionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get inventory transaction by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the inventory transaction.',
  })
  @ApiResponse({ status: 404, description: 'Inventory transaction not found.' })
  findOne(@Param('id') id: string) {
    return this.inventoryTransactionsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update inventory transaction' })
  @ApiResponse({
    status: 200,
    description: 'The inventory transaction has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Inventory transaction not found.' })
  update(
    @Param('id') id: string,
    @Body() updateInventoryTransactionDto: UpdateInventoryTransactionDto,
  ) {
    return this.inventoryTransactionsService.update(
      id,
      updateInventoryTransactionDto,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete inventory transaction' })
  @ApiResponse({
    status: 200,
    description: 'The inventory transaction has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Inventory transaction not found.' })
  remove(@Param('id') id: string) {
    return this.inventoryTransactionsService.remove(id);
  }
}
