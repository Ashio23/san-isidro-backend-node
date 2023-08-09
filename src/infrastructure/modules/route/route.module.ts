import { ROUTE_PORT, RouteUseCase } from '@domain/route';
import { Module } from '@nestjs/common';
import { RouteController } from './route.controller';
import { RouteService } from './route.service';
@Module({
  controllers: [RouteController],
  providers: [RouteUseCase, { provide: ROUTE_PORT, useClass: RouteService }],
})
export class RouteModule {}
