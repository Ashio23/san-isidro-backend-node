import { Inject, Injectable } from '@nestjs/common';
import { SqlService } from '@infrastructure/application/adapters/database/sql.service';
import { IGroupPort } from '@domain/group';
import { SQL_ADAPTER } from '@infrastructure/application/adapters/database';

@Injectable()
export class GroupService implements IGroupPort {
  constructor(
    @Inject(SQL_ADAPTER)
    private readonly sqlService: SqlService,
  ) {}

  async getGroups(branchName: string): Promise<unknown> {
    const query = `SELECT DISTINCT id_grupo id, id_grupo FROM grupos WHERE id_sucursal = (SELECT id_sucursal FROM sucursal WHERE nombre='${branchName}')`;
    return await this.sqlService.query(query);
  }
}
