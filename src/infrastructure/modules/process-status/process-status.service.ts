import { IProcessStatusPort } from '@domain/process-status';
import {
  SQL_ADAPTER,
  SqlService,
} from '@infrastructure/application/adapters/database';
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
    const result = await this.sqlService.query(
      `SELECT
        COUNT(*)
      FROM
        estado_proceso_dte
      WHERE
        id_proceso = ${processId} AND
        id_ruta = (SELECT id_ruta FROM rutas WHERE encargado = '${routeName}') AND
        estado_proceso IN (0, 1, 2) AND
        id_estado_proceso_dte = ${documentStatus}`,
    );
    return !result || Object.keys(result).length === 0 ? false : true;
  }
}
