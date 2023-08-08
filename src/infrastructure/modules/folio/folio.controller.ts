import { FolioUseCase } from '@domain/folio';
import { Controller, Get } from '@nestjs/common';

@Controller('folio')
export class FolioController {
  constructor(private readonly folioUseCase: FolioUseCase) {}

  @Get()
  getDocuments() {
    return this.folioUseCase.findFoliosUseCase();
  }
}
