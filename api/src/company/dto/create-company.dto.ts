import { IsNotEmpty, MinLength, MaxLength, Length } from 'class-validator';
import { IsCNPJ } from 'src/decorators/isCNPJ.decorator';
// import { IsImage } from 'src/decorators/isImage.decorator';
import { IsUF } from 'src/decorators/isUf.decorator';

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

  @IsCNPJ({ message: 'CNPJ inválido!' })
  @IsNotEmpty({ message: 'Campo deve ser informado' })
  cnpj: string;

  @IsUF({ message: 'UF inválida' })
  @IsNotEmpty({ message: 'Campo deve ser informado' })
  uf: string;

  @MaxLength(255, { message: 'Campo deve possuir no máximo 255 caracteres' })
  @IsNotEmpty({ message: 'Campo deve ser informado' })
  city: string;

  // @IsImage({ message: 'A imagem deve ser um arquivo .PNG' })
  // @IsNotEmpty({ message: 'Campo deve ser informado' })
  // logo: any;
}
