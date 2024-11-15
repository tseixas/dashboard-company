import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from 'src/company/company.entity';
import { CreateCompanyDto } from 'src/company/dto/create-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  findAll() {
    return this.companyRepository.find({ relations: ['contracts'] });
  }

  async create(createCompanyDto: CreateCompanyDto) {
    const company = this.companyRepository.create(createCompanyDto);

    const result = await this.companyRepository
      .save(company)
      .then(() => company)
      .catch((err) => {
        console.log(err);
        return new InternalServerErrorException();
      });

    return result;
  }

  public async findOne(id: number) {
    const company = await this.companyRepository.findOne({ where: { id } });

    if (!company) {
      throw new HttpException(
        {
          message: 'Não encontrado',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return company;
  }
}
