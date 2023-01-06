import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExchangeController } from './exchange.controller';
import { Exchange } from './exchange.entity';
import { Socket } from './exchange.gateway';
import { ExchangeRepository } from './exchange.repository';
import { ExchangeService } from './exchange.service';

@Module({
  imports: [TypeOrmModule.forFeature([Exchange]), HttpModule, ConfigModule],
  providers: [Socket, ExchangeService, ExchangeRepository],
  controllers: [ExchangeController],
})
export class ExchangeModule {}
