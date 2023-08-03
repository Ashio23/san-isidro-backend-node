import { ProcessUseCase } from '@domain/process/process.use-case';
import { Controller, Get } from '@nestjs/common';

@Controller('processes')
export class ProcessController {
  constructor(private readonly processUseCase: ProcessUseCase) {}

  @Get()
  async getProcesses() {
    return await this.processUseCase.getProcess();
  }
}
