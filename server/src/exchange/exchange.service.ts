import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { lastValueFrom, map, mergeMap, Observable, of, toArray } from 'rxjs';

import { currencieDto } from './dto/exchange-dto';
import { Exchange } from './exchange.entity';
import { ExchangeRepository } from './exchange.repository';

@Injectable()
export class ExchangeService {
  constructor(
    private readonly httpService: HttpService,
    private readonly exchangeRepository: ExchangeRepository,
    private readonly configService: ConfigService,
  ) {}

  /**
   *
   * @description method that get exchange data by page
   * @param {object} options params to control the page and the limit
   * @returns {Promise<Pagination<Exchange>> }
   */
  getExchangeDataByPage(
    options: IPaginationOptions,
  ): Promise<Pagination<Exchange>> {
    return this.exchangeRepository.paginate(options);
  }

  /**
   *
   * @description method that get the conversion rates
   * @returns {Observable<{ rates: currencieDto[] }>}
   */
  getRates(): Observable<{ rates: currencieDto[] }> {
    return this.httpService
      .get('http://coinapi:4001/exchangerate')
      .pipe(map((res): { rates: currencieDto[] } => res.data));
  }

  /**
   *
   * @description method that serialize currencie data
   * @param {Observable<{ rates: currencieDto[] }>} data$ Observable with currencie data
   * @returns {Observable<Observable<{time: string;currency_from: string;currency_to: string;rate: number;}[]>>}
   */
  serializeCurrencie(data$: Observable<{ rates: currencieDto[] }>) {
    return data$.pipe(
      mergeMap((res) => res.rates),
      map((data: currencieDto) => {
        return {
          time: data.time,
          currency_from: data.asset_id_base,
          currency_to: data.asset_id_quote,
          rate: data.rate,
        };
      }),
      toArray(),
    );
  }

  /**
   *
   * @description method that allows to update live currencies
   * @returns {Promise<Exchange[]>}
   */
  async updateLiveCurrencies() {
    const currenciesData = await lastValueFrom(
      this.serializeCurrencie(this.getRates()),
    );
    const updatedCurrencies: Promise<Exchange>[] = [];
    // //I know this is not performant but it works at the moment. I will inprove it latter
    currenciesData.map((currencieData) => {
      updatedCurrencies.push(
        this.exchangeRepository.updateLiveCurrencie(currencieData),
      );
    });
    return await Promise.all<Exchange>(updatedCurrencies);
  }
}
