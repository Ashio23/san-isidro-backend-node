import { CheckProcessStatusUseCase } from '@domain/process-status';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('process-status')
export class ProcessStatusController {
  constructor(
    private readonly checkProcessStatusUseCase: CheckProcessStatusUseCase,
  ) {}

  @Get()
  async getProcessStatus(
    @Query('processId') processId: string,
    @Query('routeName') routeName: string,
    @Query('documentStatus') documentStatus: number,
  ) {
    const isProcessPendingOrRunning =
      await this.checkProcessStatusUseCase.execute(
        processId,
        routeName,
        documentStatus,
      );

    return {
      processId,
      routeName,
      documentStatus,
      isProcessPendingOrRunning,
    };
  }
}
