import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ContractService } from './contract.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('contract')
@UseGuards(AuthGuard)
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        dateEffective: { type: 'date', example: '2024-01-01 00:00:00' },
        dateSignature: { type: 'date', example: '2024-01-01 00:00:00' },
        fee: { type: 'string', example: '10' },
      },
      required: ['name', 'email'], // Campos obrigatórios
    },
  })
  create(@Body() createCompanyDto: CreateContractDto) {
    return this.contractService.create(createCompanyDto);
  }

  @Get()
  findAll() {
    return this.contractService.findAll();
  }

  @Get(':id')
  async findOne(@Request() request, @Param('id') id: number) {
    const item = await this.contractService.findOne(id);

    if (!item) {
      throw new HttpException(
        { message: 'Não encontrado' },
        HttpStatus.NOT_FOUND,
      );
    }

    return item;
  }
}
