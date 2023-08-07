import {
  SHCEDULE_SEND_PROCESS_PORT,
  ScheduleSendProcessUseCase,
} from '@domain/schedule-send-process';
import { ScheduleSendProcessController } from './schedule-send-process.controller';
import { ScheduleSendProcessService } from './schedule-send-process.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ScheduleSendProcessController],
  providers: [
    ScheduleSendProcessUseCase,
    {
      provide: SHCEDULE_SEND_PROCESS_PORT,
      useClass: ScheduleSendProcessService,
    },
  ],
})
export class ScheduleSendProcessModule {}
