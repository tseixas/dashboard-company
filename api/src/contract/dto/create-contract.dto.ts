import { Type } from 'class-transformer';
import { IsNotEmpty, IsDate, Max, IsPositive, IsNumber } from 'class-validator';

export class CreateContractDto {
  id: number;

  @Type(() => Date)
  @IsDate({ message: 'Data Inválida' })
  @IsNotEmpty({ message: 'Data deve ser informada' })
  dateEffective: Date;

  @Type(() => Date)
  @IsDate({ message: 'Data Inválida' })
  @IsNotEmpty({ message: 'Data deve ser informada' })
  dateSignature: string;

  @Type(() => Number)
  @Max(9999999, { message: 'Valor maior que o permitido' })
  @IsPositive({ message: 'Valor deve ser maior que zero' })
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Valor inválido' })
  fee: number;
}
