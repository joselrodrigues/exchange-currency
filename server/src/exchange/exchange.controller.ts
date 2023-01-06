import { Body, Controller, Post, Get } from '@nestjs/common';

import { ExchangeService } from './exchange.service';

@Controller('exchange')
export class ExchangeController {
  constructor(private exchangeService: ExchangeService) {}

  //   @Get('/transaction')
  //   transaction(@Body() transaction: TransactionDto) {
  //     try {
  //       return this.exchangeService.transaction();
  //     } catch (e) {}
  //   }
}
