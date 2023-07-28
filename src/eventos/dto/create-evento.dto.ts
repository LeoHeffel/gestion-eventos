import { IsNotEmpty, IsDateString, IsMilitaryTime, MinLength } from 'class-validator';

export class CreateEventoDto {
  @MinLength(3)
  title: string;
  @IsDateString()
  date: string;
  @IsMilitaryTime()
  hour: string;
  @IsNotEmpty()
  @MinLength(15)
  description: string;
  reminder: string;
}
