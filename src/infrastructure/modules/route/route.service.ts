import { Inject, Injectable } from '@nestjs/common';
import { SQL_ADAPTER, SqlService } from '@application/adapters/database';
import { IRouteDto, IRoutePort } from '@domain/route';

@Injectable()
export class RouteService implements IRoutePort {
  constructor(
    @Inject(SQL_ADAPTER)
    private readonly sqlService: SqlService,
  ) {}

  async findRoutesByGroupAndBranch(routeDto: IRouteDto): Promise<unknown> {
    const query = `SELECT r.id_ruta id, r.encargado FROM sssi2.rutas r, sucursal s
                   where id_grupo='${routeDto.groupId}'
                   and r.id_sucursal=s.id_sucursal
                   and s.nombre='${routeDto.branchName}'`;

    const result = await this.sqlService.query(query);
    if (!result || Object.keys(result).length === 0) {
      throw new Error(
        `No routes found for groupId: ${routeDto.groupId} and branchName: ${routeDto.branchName}`,
      );
    }
    return result;
  }
}
