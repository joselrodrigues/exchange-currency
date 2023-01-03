import { Module } from '@nestjs/common';
import { Socket } from './exchange.gateway';

@Module({ providers: [Socket] })
export class ExchangeModule {}
