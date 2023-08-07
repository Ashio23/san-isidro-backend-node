import { Inject, Injectable } from '@nestjs/common';
import {
  SQL_ADAPTER,
  SqlService,
} from '@infrastructure/application/adapters/database';
import { BranchResponseDto } from './entity/branch.entity';
import { IBranchPort } from '@domain/branch';

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
