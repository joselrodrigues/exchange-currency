import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { lastValueFrom, interval } from 'rxjs';
import { Server } from 'socket.io';
import { ExchangeService } from './exchange.service';

@WebSocketGateway()
export class Socket implements OnModuleInit, OnModuleDestroy {
  constructor(
    private readonly exchangeService: ExchangeService,
    private configService: ConfigService,
  ) {}
  subscription$;
  @WebSocketServer()
  server: Server;
  onModuleInit() {
    //TODO: change env's name
    const timeInMs = this.configService.get('UPDATE_INTERVAL_MS');

    // this.subscription$ = interval(timeInMs).subscribe(() =>
    //   console.log('SEEEE'),
    // );
  }

  onModuleDestroy() {
    this.subscription$.unsubscribe();
  }
  @SubscribeMessage('updateLiveCurrencies')
  async handleUpdate() {
    // const rawData = await this.exchangeService.updateLiveCurrencies();
    const data = await this.exchangeService.getExchangeDataByPage({
      limit: 1,
      page: 1,
      route: '',
    });
    console.log(data, 'SEEEEEEEEE');
    // this.server.emit('getExchangeData', {});
  }
}
