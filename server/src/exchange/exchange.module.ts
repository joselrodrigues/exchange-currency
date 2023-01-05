import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exchange } from './exchange.entity';
import { Socket } from './exchange.gateway';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Exchange]), HttpModule, ConfigModule],
  providers: [Socket, ExchangeService],
  controllers: [ExchangeController],
})
export class ExchangeModule {}
