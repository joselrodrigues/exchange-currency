import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from './exchange.model';

@Entity()
export class Exchange {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'datetime' })
  date: string;

  @Column()
  currency_from: string;

  @Column({ type: 'integer' })
  first_amount: string;

  @Column()
  currency_to: string;

  @Column({ type: 'numeric' })
  second_amount: string;

  @Column()
  type: Type;
}
