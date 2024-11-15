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
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('company')
@UseGuards(AuthGuard)
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        nickname: { type: 'string', example: 'nickname' },
        tradeName: { type: 'string', example: 'tradeName' },
        companyName: { type: 'string', example: 'companyName' },
        cnpj: { type: 'string', example: '10.361.972/0001-65' },
        uf: { type: 'string', example: 'AM' },
        city: { type: 'string', example: 'Manaus' },
        contracts: { type: 'array', example: [{ id: 1 }] },
      },
      required: ['name', 'email'], // Campos obrigatórios
    },
  })
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  async findOne(@Request() request, @Param('id') id: number) {
    const item = await this.companyService.findOne(id);

    if (!item) {
      throw new HttpException(
        { message: 'Não encontrado' },
        HttpStatus.NOT_FOUND,
      );
    }

    return item;
  }
}
