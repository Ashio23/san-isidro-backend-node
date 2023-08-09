import { FolioUseCase } from '@domain/folio';
import { Controller, Get, Put, Query } from '@nestjs/common';
import { FolioDto, FolioUpd } from './dto';

@Controller('folio')
export class FolioController {
  constructor(private readonly folioUseCase: FolioUseCase) {}

  @Get()
  findFoliosController() {
    return this.folioUseCase.findFoliosUseCase();
  }
  @Put()
  updateFolioscontroller(
    @Query('eventType') eventType: string,
    @Query('idfolio') idfolio: number,
    @Query('folio_final') folio_final: number,
  ) {
    const folioUpd = new FolioUpd();
    folioUpd.idfolio = idfolio;
    folioUpd.folio_final = folio_final;

    const folio = new FolioDto();
    folio.eventType = eventType;
    folio.folio = folioUpd;
    return this.folioUseCase.updateFoliosUseCase(folio);
  }
}
