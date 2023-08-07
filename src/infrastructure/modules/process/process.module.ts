import { PROCESS_ADAPTER, ProcessUseCase } from '@domain/process';
import { Module } from '@nestjs/common';
import { ProcessController } from './process.controller';
import { ProcessService } from './process.service';

@Module({
  controllers: [ProcessController],
  providers: [
    ProcessUseCase,
    {
      provide: PROCESS_ADAPTER,
      useClass: ProcessService,
    },
  ],
})
export class ProcessModule {}
