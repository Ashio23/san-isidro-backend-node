import { GetCommuneUseCase } from '@domain/commune/get-commune.use-case';
import { Controller, Get } from '@nestjs/common';

@Controller('commune')
export class CommuneController {
  constructor(private readonly getCommuneUseCase: GetCommuneUseCase) {}

  @Get()
  getCommune() {
    return this.getCommuneUseCase.getCommune();
  }
}
