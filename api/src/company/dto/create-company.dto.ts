import { IsNotEmpty, MinLength, MaxLength, Length } from 'class-validator';

export class CreateCompanyDto {
  id: number;

  @Length(4, 255, { message: 'Nome deve possuir de 4 a 255 caracteres' })
  @IsNotEmpty({ message: 'Campo deve ser informado' })
  nickname: string;

  @MinLength(4, { message: 'Campo deve possuir ao menos 4 caracteres' })
  @IsNotEmpty({ message: 'Campo deve ser informado' })
  tradeName: string;

  @MaxLength(255, { message: 'Campo deve possuir no máximo 255 caracteres' })
  @IsNotEmpty({ message: 'Campo deve ser informado' })
  companyName: string;

  @MaxLength(255, { message: 'Campo deve possuir no máximo 255 caracteres' })
  @IsNotEmpty({ message: 'Campo deve ser informado' })
  cnpj: string;

  @MaxLength(255, { message: 'Campo deve possuir no máximo 255 caracteres' })
  @IsNotEmpty({ message: 'Campo deve ser informado' })
  uf: string;

  @MaxLength(255, { message: 'Campo deve possuir no máximo 255 caracteres' })
  @IsNotEmpty({ message: 'Campo deve ser informado' })
  city: string;

  @MaxLength(255, { message: 'Campo deve possuir no máximo 255 caracteres' })
  @IsNotEmpty({ message: 'Campo deve ser informado' })
  logo: string;
}
