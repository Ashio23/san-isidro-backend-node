import {
  IScheduleSendProcessPort,
  SHCEDULE_SEND_PROCESS_PORT,
} from '@domain/schedule-send-process';
import { Inject } from '@nestjs/common';

export class ScheduleSendProcessUseCase {
  constructor(
    @Inject(SHCEDULE_SEND_PROCESS_PORT)
    private readonly scheduleSendProcessPort: IScheduleSendProcessPort,
  ) {}

  async execute(
    processId: number,
    route: string,
    documentTypeId: number,
  ): Promise<unknown> {
    return this.scheduleSendProcessPort.scheduleSendProcess(
      processId,
      route,
      documentTypeId,
    );
  }
}
