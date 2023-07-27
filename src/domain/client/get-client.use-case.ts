import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Client } from './dto';
import { IClientePort } from './port';

@Injectable()
export class FindCliente implements IClientePort {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async findById(id: number): Promise<Client> {
    const findOneOptions: FindOneOptions<Client> = {
      where: { id: id },
    };

    const client = await this.clientRepository.findOne(findOneOptions);

    if (!client) {
      throw new NotFoundException('Cliente no encontrado');
    }

    return client;
  }
}
