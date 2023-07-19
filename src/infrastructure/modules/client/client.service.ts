import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async findById(id: number): Promise<Cliente | null> {
    const cliente = await this.clienteRepository
      .createQueryBuilder('cliente')
      .where('cliente.id = :id', { id })
      .getOne();

    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado');
    }

    return cliente;
  }
}
