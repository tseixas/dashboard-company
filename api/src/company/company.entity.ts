import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';
import { Contract } from 'src/contract/contract.entity';

@Entity()
@Index(['cnpj'], { unique: true })
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  tradeName: string;

  @Column()
  companyName: string;

  @Column({ unique: true })
  cnpj: string;

  @Column()
  uf: string;

  @Column()
  city: string;

  @Column()
  logo: string;

  @OneToMany(() => Contract, (contract) => contract.company)
  contracts: Contract[];
}
