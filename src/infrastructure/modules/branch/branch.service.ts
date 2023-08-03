import { Inject, Injectable } from '@nestjs/common';
import { SqlService } from '@infrastructure/application/adapters/database/sql.service';
import { BranchResponseDto } from './entity/branch.entity';
import { IBranchPort } from '@domain/branch/port';
import { SQL_ADAPTER } from '@infrastructure/application/adapters/database';

@Injectable()
export class BranchService implements IBranchPort {
  constructor(
    @Inject(SQL_ADAPTER)
    private readonly sqlService: SqlService,
  ) {}

  async getBranches(): Promise<BranchResponseDto[]> {
    const branches = await this.sqlService.query(
      'SELECT distinct id_sucursal as id, nombre as name FROM sucursal',
    );
    return branches as BranchResponseDto[];
  }
}
