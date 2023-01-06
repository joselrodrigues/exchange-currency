import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { Exchange } from './exchange.entity';
import { Type } from './exchange.model';
import { currencieProp } from './types';

@Injectable()
export class ExchangeRepository {
  constructor(
    @InjectRepository(Exchange)
    private exchangeRepository: Repository<Exchange>,
  ) {}

  /**
   *
   * @description method that allows to create a live currencie
   * @param {number} rate currencie rate
   * @param {string} currency_from from the currencie you want to change
   * @param {string} currency_to to the currencia you want to exchange
   * @returns {Promise<Exchange>}
   */
  async createLiveCurencie({
    rate,
    currency_to,
    currency_from,
  }: currencieProp) {
    const exchange = this.exchangeRepository.create({
      date: new Date(),
      currency_from,
      amount: 1,
      currency_to,
      rate,
      type: Type.LIVE,
    });
    return await this.exchangeRepository.save(exchange);
  }

  /**
   *
   * @description method that allows to update a live currencie
   * @param {number} rate currencie rate
   * @param {string} currency_from from the currencie you want to change
   * @param {string} currency_to to the currencia you want to exchange
   * @returns {Promise<Exchange>}
   */
  async updateLiveCurrencie({
    rate,
    currency_to,
    currency_from,
  }: currencieProp) {
    try {
      const exchange = await this.exchangeRepository.findOneOrFail({
        where: { currency_from, currency_to, type: Type.LIVE },
      });
      exchange.rate = rate;
      exchange.date = new Date();
      return await this.exchangeRepository.save(exchange);
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        return await this.createLiveCurencie({
          rate,
          currency_to,
          currency_from,
        });
      }
      throw error;
    }
  }
}