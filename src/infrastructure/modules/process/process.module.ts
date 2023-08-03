import { PROCESS_ADAPTER } from '@domain/process/port';
import { ProcessUseCase } from '@domain/process/process.use-case';
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
