import { IScheduleSendProcessPort } from '@domain/schedule-send-process';
import {
  SQL_ADAPTER,
  SqlService,
} from '@infrastructure/application/adapters/database';
import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ScheduleSendProcessService implements IScheduleSendProcessPort {
  constructor(
    @Inject(SQL_ADAPTER)
    private readonly sqlService: SqlService,
  ) {}

  async scheduleSendProcess(
    processId: number,
    route: string,
    documentTypeId: number,
  ): Promise<unknown> {
    Logger.log(
      `CALL SP_SEND_PROCESS(${processId}, ${route}, ${documentTypeId})`,
    );
    return await this.sqlService.query(
      `CALL SP_SEND_PROCESS(${processId}, ${route}, ${documentTypeId})`,
    );
  }
}
