import { GetCommuneUseCase } from '@domain/commune/get-commune.use-case';
import { GET_COMMUNE_ADAPTER } from '@domain/commune/port/get-commune.port';
import { Module } from '@nestjs/common';
import { CommuneController } from './commune.controller';
import { CommuneService } from './commune.service';

@Module({
  controllers: [CommuneController],
  providers: [
    GetCommuneUseCase,
    {
      provide: GET_COMMUNE_ADAPTER,
      useClass: CommuneService,
    },
  ],
})
export class CommuneModule {}
