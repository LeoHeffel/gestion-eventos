import { CreateEventoDto } from './create-evento.dto';
import { IsOptional } from 'class-validator';

export class UpdateEventoDto extends CreateEventoDto {
  @IsOptional()
  title: string;
  @IsOptional()
  date: string;
  @IsOptional()
  hour: string;
  @IsOptional()
  description: string;
  @IsOptional()
  reminder: string;
}
