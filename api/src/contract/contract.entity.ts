import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Company } from 'src/company/company.entity';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  dateEffective: Date;

  @Column({ type: 'date' })
  dateSignature: Date;

  @Column('decimal')
  fee: number;

  @ManyToOne(() => Company, (company) => company.contracts, {
    onDelete: 'CASCADE',
  })
  company: Company;
}
