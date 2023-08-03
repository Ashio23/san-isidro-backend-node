import { Inject, Injectable } from '@nestjs/common';
import {
  GET_PROCCES_STATUS_ADAPTER,
  IProcessStatusPort,
} from './port/get-process-status.port';

@Injectable()
export class CheckProcessStatusUseCase {
  constructor(
    @Inject(GET_PROCCES_STATUS_ADAPTER)
    private readonly processStatusPort: IProcessStatusPort,
  ) {}

  async execute(processId: string, routeName: string, documentStatus: number) {
    return this.processStatusPort.checkProcessStatus(
      processId,
      routeName,
      documentStatus,
    );
  }
}
