import { Inject, Injectable } from '@nestjs/common';
import { FOLIO_PORT, IFolioPort } from './port';
import { IFolioDto } from './dto';

@Injectable()
export class FolioUseCase {
  constructor(
    @Inject(FOLIO_PORT)
    private readonly folioPort: IFolioPort,
  ) {}
  async findFoliosUseCase() {
    return await this.folioPort.findFolios();
  }
  async updateFoliosUseCase(body: IFolioDto) {
    return await this.folioPort.updateFolio(body);
  }
}
