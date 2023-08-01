import { SQL_ADAPTER } from '@infrastructure/application/adapters/database';
import { SqlService } from '@infrastructure/application/adapters/database/sql.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CommuneService {
  constructor(@Inject(SQL_ADAPTER) private readonly sqlService: SqlService) {}

  async getCommune() {
    const query =
      'SELECT distinct id_comuna id, com_nombre as nombre FROM comuna';
    return this.sqlService.query(query);
  }
}
