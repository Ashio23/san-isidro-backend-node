import { Controller, Get } from '@nestjs/common';
import { Comuna } from './entity';
import { ComunaService } from './commune.service';

@Controller('comuna')
export class ComunaController {
  constructor(private readonly comunaService: ComunaService) {}

  @Get()
  async findAll(): Promise<Comuna[]> {
    return this.comunaService.findDistinct();
  }
}
