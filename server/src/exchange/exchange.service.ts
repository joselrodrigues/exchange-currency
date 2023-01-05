import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { RateDto } from './dto/exchange-dto';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class ExchangeService {
  constructor(private readonly httpService: HttpService) {}
  getRate({ from, to }: RateDto) {
    return this.httpService
      .get(`http://rest.coinapi.io/v1/exchangerate/${from}/${to}`, {
        headers: {
          'X-CoinAPI-Key': '1DDB114F-9756-40C5-A064-66A76864E144',
          'Accept-Encoding': 'gzip,deflate,compress',
        },
      })
      .pipe(map((res) => res?.data));
  }

  async updateCurrencies() {
    const BTCToUSD = lastValueFrom(this.getRate({ from: 'BTC', to: 'USD' }));
    const ETHToUSD = lastValueFrom(this.getRate({ from: 'ETH', to: 'USD' }));
    const XRPToUSD = lastValueFrom(this.getRate({ from: 'XRP', to: 'USD' }));
    const LTCToUSD = lastValueFrom(this.getRate({ from: 'LTC', to: 'USD' }));

    return Promise.all([BTCToUSD, ETHToUSD, XRPToUSD, LTCToUSD]);
  }
}
