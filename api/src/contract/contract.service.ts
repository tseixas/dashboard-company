import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Contract } from './contract.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateContractDto } from './dto/create-contract.dto';

@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(Contract)
    private contractRepository: Repository<Contract>,
  ) {}
  findAll() {
    return this.contractRepository.find();
  }

  async create(createCompanyDto: CreateContractDto) {
    const company = this.contractRepository.create(createCompanyDto);

    const result = await this.contractRepository
      .save(company)
      .then(() => company)
      .catch((err) => {
        console.log(err);
        return new InternalServerErrorException();
      });

    return result;
  }

  public async findOne(id: number) {
    const company = await this.contractRepository.findOne({ where: { id } });

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
