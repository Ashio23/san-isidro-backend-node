import {
  GET_PROCCES_STATUS_ADAPTER,
  CheckProcessStatusUseCase,
} from '@domain/process-status';
import { Module } from '@nestjs/common';
import { ProcessStatusController } from './process-status.controller';
import { ProcessStatusService } from './process-status.service';
@Module({
  controllers: [ProcessStatusController],
  providers: [
    CheckProcessStatusUseCase,
    { provide: GET_PROCCES_STATUS_ADAPTER, useClass: ProcessStatusService },
  ],
})
export class ProcessStatusModule {}
