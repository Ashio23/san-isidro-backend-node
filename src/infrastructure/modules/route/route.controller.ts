import { RouteUseCase } from '@domain/route';
import { Controller, Get, Query } from '@nestjs/common';
@Controller('route')
export class RouteController {
  constructor(private readonly routeUseCase: RouteUseCase) {}
  @Get()
  async findRouteController(
    @Query('groupId') groupId: string,
    @Query('branchName') branchName: string,
  ) {
    return await this.routeUseCase.findRoutesByGroupAndBranchUseCase({
      groupId,
      branchName,
    });
  }
}
