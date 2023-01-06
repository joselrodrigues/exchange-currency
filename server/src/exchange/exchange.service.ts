import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { lastValueFrom, map, Observable, of } from 'rxjs';

import { currencieDto, RateDto } from './dto/exchange-dto';
import { Exchange } from './exchange.entity';
import { ExchangeRepository } from './exchange.repository';
import { currencieProp } from './types';

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
   * @param {string} from from the currencie you want to change
   * @param {string} to to the currencia you want to exchange
   * @returns {Observable<currencieDto>}
   */
  getRate({ from, to }: RateDto): Observable<currencieDto> {
    const APIKEY = this.configService.get('API_KEY');
    // return this.httpService
    //   .get(`http://rest.coinapi.io/v1/exchangerate/${from}/${to}`, {
    //     headers: {
    //       'X-CoinAPI-Key': `${APIKEY}`,
    //       'Accept-Encoding': 'gzip,deflate,compress',
    //     },
    //   })
    return of({
      data: {
        time: `${new Date()}`,
        asset_id_base: from,
        asset_id_quote: to,
        rate: Math.random(),
      },
    }).pipe(map((res) => res?.data));
  }
  /**
   *
   * @description method that serialize currencie data
   * @param {Observable<currencieDto>} data$ Observable with currencie data
   * @returns {Observable<currencieProp>}
   */
  serializeCurrencie(
    data$: Observable<currencieDto>,
  ): Observable<currencieProp> {
    return data$.pipe(
      map((data) => ({
        currency_from: data.asset_id_base,
        currency_to: data.asset_id_quote,
        rate: data.rate,
      })),
    );
  }

  /**
   *
   * @description method that allows to update a live currencie
   * @param rate currencie rate
   * @param currency_from from the currencie you want to change
   * @param currency_to to the currencia you want to exchange
   * @returns {Promise<Exchange[]>}
   */
  async updateLiveCurrencies() {
    const BTCToUSD = lastValueFrom(
      this.serializeCurrencie(this.getRate({ from: 'BTC', to: 'USD' })),
    );
    const ETHToUSD = lastValueFrom(
      this.serializeCurrencie(this.getRate({ from: 'ETH', to: 'USD' })),
    );
    const XRPToUSD = lastValueFrom(
      this.serializeCurrencie(this.getRate({ from: 'XRP', to: 'USD' })),
    );
    const LTCToUSD = lastValueFrom(
      this.serializeCurrencie(this.getRate({ from: 'LTC', to: 'USD' })),
    );

    const currenciesData = await Promise.all([
      BTCToUSD,
      ETHToUSD,
      XRPToUSD,
      LTCToUSD,
    ]);
    const updatedCurrencies: Promise<Exchange>[] = [];
    //I know this is not performant but it works at the moment. I will inprove it latter
    currenciesData.map((currencieData) => {
      updatedCurrencies.push(
        this.exchangeRepository.updateLiveCurrencie(currencieData),
      );
    });
    return await Promise.all<Exchange>(updatedCurrencies);
  }
}
