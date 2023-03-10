import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { interval } from 'rxjs';
import { Server } from 'socket.io';

import { ExchangeService } from './exchange.service';
import { IPaginationOptionExtended } from './types';

@WebSocketGateway({
  cors: true,
})
export class Socket implements OnModuleInit, OnModuleDestroy {
  constructor(
    private readonly exchangeService: ExchangeService,
    private configService: ConfigService,
  ) {}
  subscription$;
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    const timeInMs = this.configService.get('UPDATE_INTERVAL_MS');

    this.subscription$ = interval(timeInMs).subscribe(() =>
      this.handleUpdate(),
    );
  }

  onModuleDestroy() {
    this.subscription$.unsubscribe();
  }

  @SubscribeMessage('updateLiveCurrencies')
  async handleUpdate() {
    const data = await this.exchangeService.updateLiveCurrencies();
    this.server.emit('update', data);
  }

  @SubscribeMessage('getExchangeData')
  async getExchangeData(
    @MessageBody()
    {
      limit = 5,
      page = 1,
      route = '/exchange',
      type,
      startDate,
      endDate,
    }: IPaginationOptionExtended,
  ) {
    const data = await this.exchangeService.getExchangeDataByPage({
      page,
      limit,
      route,
      type,
      startDate,
      endDate,
    });

    this.server.emit('exchangeData', data);
  }
}
