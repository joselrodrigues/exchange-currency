import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class RateDto {
  @IsNotEmpty()
  @IsString()
  from: string;

  @IsNotEmpty()
  @IsString()
  to: string;
}
