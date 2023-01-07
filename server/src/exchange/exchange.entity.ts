import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Type } from './exchange.model';

@Entity()
export class Exchange {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  date: Date;

  @Column()
  currency_from: string;

  @Column({ type: 'integer' })
  amount: number;

  @Column()
  currency_to: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  rate: number;

  @Column()
  type: Type;
}
