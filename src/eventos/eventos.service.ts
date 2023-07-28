import { Injectable, HttpException } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Evento } from './entities/evento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private eventoRepository: Repository<Evento>,
  ) {}

  async create(createEventoDto: CreateEventoDto) {
    try {
      const newEvento = this.eventoRepository.create(createEventoDto);
      return await this.eventoRepository.save(newEvento);
    } catch (error) {
      return new HttpException('Error al crear evento: ' + error.message, 400);
    }
  }

  async findAll() {
    try {
      return await this.eventoRepository.find();
    } catch (error) {
      return new HttpException(
        'Error al buscar eventos: ' + error.message,
        400,
      );
    }
  }

  async findOne(id: number) {
    try {
      const buscado = await this.eventoRepository.findOne({
        where: { id: id },
      });
      return buscado ? buscado : new HttpException('Evento no encontrado', 404);
    } catch (error) {
      return new HttpException(
        'Error al buscar evento : ' + error.message,
        404,
      );
    }
  }

  async update(id: number, updateEventoDto: UpdateEventoDto) {
    return await this.eventoRepository.update(id, updateEventoDto);
  }

  async remove(id: number) {
    try {
      const buscado = await this.findOne(id);
      if (!buscado) {
        return new HttpException('Evento no encontrado', 404);
      }
      await this.eventoRepository.delete({ id });
      return buscado;
    } catch (error) {
      return new HttpException(
        'Error al eliminar evento : ' + error.message,
        400,
      );
    }
  }
}
