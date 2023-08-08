import { IRouteDto } from './../dto';

export const ROUTE_PORT = 'route_port';
export interface IRoutePort {
  findRoutesByGroupAndBranch(routeDto: IRouteDto): Promise<unknown>;
}
