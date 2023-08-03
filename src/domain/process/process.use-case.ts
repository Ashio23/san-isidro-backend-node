import { Injectable, Inject } from '@nestjs/common';
import { ProcessDto } from './dto';
import { IProcessPort, PROCESS_ADAPTER } from './port';

@Injectable()
export class ProcessUseCase {
  constructor(
    @Inject(PROCESS_ADAPTER)
    private readonly processPort: IProcessPort,
  ) {}

  async getProcess(): Promise<ProcessDto[]> {
    return await this.processPort.getProcesses();
  }
}
