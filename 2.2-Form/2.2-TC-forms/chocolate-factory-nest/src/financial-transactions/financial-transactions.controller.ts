// src/financial-transactions/financial-transactions.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FinancialTransactionsService } from './financial-transactions.service';
import { CreateFinancialTransactionDto } from './dto/create-financial-transaction.dto';
import { UpdateFinancialTransactionDto } from './dto/update-financial-transaction.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('financial-transactions')
@Controller('financial-transactions')
export class FinancialTransactionsController {
  constructor(
    private readonly financialTransactionsService: FinancialTransactionsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create financial transaction' })
  @ApiResponse({
    status: 201,
    description: 'The financial transaction has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createFinancialTransactionDto: CreateFinancialTransactionDto) {
    return this.financialTransactionsService.create(
      createFinancialTransactionDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all financial transactions' })
  @ApiResponse({
    status: 200,
    description: 'Return all financial transactions.',
  })
  findAll() {
    return this.financialTransactionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get financial transaction by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the financial transaction.',
  })
  @ApiResponse({ status: 404, description: 'Financial transaction not found.' })
  findOne(@Param('id') id: string) {
    return this.financialTransactionsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update financial transaction' })
  @ApiResponse({
    status: 200,
    description: 'The financial transaction has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Financial transaction not found.' })
  update(
    @Param('id') id: string,
    @Body() updateFinancialTransactionDto: UpdateFinancialTransactionDto,
  ) {
    return this.financialTransactionsService.update(
      id,
      updateFinancialTransactionDto,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete financial transaction' })
  @ApiResponse({
    status: 200,
    description: 'The financial transaction has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Financial transaction not found.' })
  remove(@Param('id') id: string) {
    return this.financialTransactionsService.remove(id);
  }
}
