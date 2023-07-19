import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ClienteService } from './client.service';
import { Cliente } from './entity';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Cliente> {
    const cliente = await this.clienteService.findById(id);
    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado');
    }
    return cliente;
  }
}
