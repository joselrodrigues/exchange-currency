import { IPaginationOptions } from 'nestjs-typeorm-paginate';

export interface currencyProp {
  rate: number;
  currency_to: string;
  currency_from: string;
}

export interface IPaginationOptionExtended extends IPaginationOptions {
  type: string;
  startDate: string;
  endDate: string;
}
