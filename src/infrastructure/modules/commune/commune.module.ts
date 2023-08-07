import { GET_COMMUNE_ADAPTER, GetCommuneUseCase } from '@domain/commune';
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
