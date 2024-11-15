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

@Controller('company')
@UseGuards(AuthGuard)
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
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
