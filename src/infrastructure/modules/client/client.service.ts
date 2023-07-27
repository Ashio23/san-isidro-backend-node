import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Client)
    private clienteRepository: Repository<Client>,
  ) {}

  async findById(id: number): Promise<Client | null> {
    const client = await this.clienteRepository
      .createQueryBuilder('cliente')
      .where('cliente.id = :id', { id })
      .getOne();

    if (!client) {
      throw new NotFoundException('Cliente no encontrado');
    }

    return client;
  }
}
