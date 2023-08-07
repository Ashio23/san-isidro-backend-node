import { Inject, Injectable } from '@nestjs/common';
import {
  SQL_ADAPTER,
  SqlService,
} from '@infrastructure/application/adapters/database';
import { IGroupPort } from '@domain/group';

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
