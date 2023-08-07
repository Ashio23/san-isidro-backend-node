import { ScheduleSendProcessUseCase } from '@domain/schedule-send-process';
import { Body, Controller, Post } from '@nestjs/common';
import { ScheduleSendProcessRequest } from './dto';
@Controller('schedule-send-process')
export class ScheduleSendProcessController {
  constructor(
    private readonly scheduleSendProcessUseCase: ScheduleSendProcessUseCase,
  ) {}
  @Post()
  async scheduleSendProcess(
    @Body() request: ScheduleSendProcessRequest,
  ): Promise<unknown> {
    const { processId, route, documentTypeId } = request;
    const message = await this.scheduleSendProcessUseCase.execute(
      processId,
      route,
      documentTypeId,
    );
    return { message };
  }
}
