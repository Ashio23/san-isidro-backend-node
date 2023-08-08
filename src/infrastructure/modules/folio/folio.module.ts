import { FOLIO_PORT, FolioUseCase } from '@domain/folio';
import { Module } from '@nestjs/common';
import { FolioController } from './folio.controller';
import { FolioService } from './folio.service';

@Module({
  controllers: [FolioController],
  providers: [
    FolioUseCase,
    {
      provide: FOLIO_PORT,
      useClass: FolioService,
    },
  ],
})
export class FolioModule {}
