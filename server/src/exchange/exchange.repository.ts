import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exchange } from './exchange.entity';

@Injectable()
export class ExchangeRepository {
  constructor(
    @InjectRepository(Exchange)
    private exchangeRepository: Repository<Exchange>,
  ) {}

  async updateCurrencies() {
    return await this.exchangeRepository.save({});
  }
}
