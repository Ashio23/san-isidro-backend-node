import { Inject, Injectable } from '@nestjs/common';
import { ROUTE_PORT, IRoutePort } from './port';
import { IRouteDto } from './dto';
@Injectable()
export class RouteUseCase {
  constructor(
    @Inject(ROUTE_PORT)
    private readonly routePort: IRoutePort,
  ) {}
  async findRoutesByGroupAndBranchUseCase(routeDto: IRouteDto) {
    return this.routePort.findRoutesByGroupAndBranch(routeDto);
  }
}
