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
  server: Server;
  @WebSocketServer()
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
  @SubscribeMessage('message')
  async handleUpdate() {
    const rawData = await this.exchangeService.updateCurrencies();

    console.log(rawData);
    // this.server.emit('update', { data });
  }
}
