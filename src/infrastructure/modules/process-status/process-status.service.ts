import { IProcessStatusPort } from '@domain/process-status';
import { SQL_ADAPTER } from '@infrastructure/application/adapters/database';
import { SqlService } from '@infrastructure/application/adapters/database/sql.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ProcessStatusService implements IProcessStatusPort {
  constructor(
    @Inject(SQL_ADAPTER)
    private readonly sqlService: SqlService,
  ) {}

  async checkProcessStatus(
    processId: string,
    routeName: string,
    documentStatus: number,
  ): Promise<boolean> {
    let response = false;
    const result = await this.sqlService.query(
      `SELECT COUNT(*) FROM process_status WHERE process_id = ${processId} AND route_id = (SELECT id FROM routes WHERE name = ${routeName}) AND status IN (0, 1, 2) AND document_status = ${documentStatus}`,
    );
    if (result) {
      response = true;
    }
    return response;
  }
}
