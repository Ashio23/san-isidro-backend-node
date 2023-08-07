import { IProcessPort } from '@domain/process/port';
import {
  SQL_ADAPTER,
  SqlService,
} from '@infrastructure/application/adapters/database';
import { Injectable, Inject } from '@nestjs/common';
import { ProcessResponseDto } from './entity';

@Injectable()
export class ProcessService implements IProcessPort {
  constructor(
    @Inject(SQL_ADAPTER)
    private readonly sqlService: SqlService,
  ) {}
  async getProcesses(): Promise<ProcessResponseDto[]> {
    const processes = await this.sqlService.query(
      `SELECT distinct id_proceso as id, id_proceso as process
       FROM (SELECT distinct id_proceso, fac_id_facturacion
       FROM tsi_facturacion
       WHERE fac_id_facturacion > 24493197
       ORDER BY fac_id_facturacion DESC) as t`,
    );
    return processes as ProcessResponseDto[];
  }
}
