import { IsNotEmpty, IsString, IsNumber, IsDateString } from 'class-validator';

export class RateDto {
  @IsNotEmpty()
  @IsString()
  from: string;

  @IsNotEmpty()
  @IsString()
  to: string;
}

export class currencieDto {
  @IsNotEmpty()
  @IsDateString()
  time: string;
  @IsNotEmpty()
  @IsString()
  asset_id_base: string;
  @IsNotEmpty()
  @IsString()
  asset_id_quote: string;
  @IsNotEmpty()
  @IsNumber()
  rate: number;
}
