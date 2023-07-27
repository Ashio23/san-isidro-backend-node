import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ClienteService } from './client.service';
import { Client } from './entity';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Client> {
    const client = await this.clienteService.findById(id);
    if (!client) {
      throw new NotFoundException('Cliente no encontrado');
    }
    return client;
  }
}
