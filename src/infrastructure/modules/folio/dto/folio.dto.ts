import { IFolioDto, IFolioUpd } from '@domain/folio/dto/folio.dto';

export class FolioDto implements IFolioDto {
  eventType: string;
  folio: FolioUpd;
}
export class FolioUpd implements IFolioUpd {
  idfolio: number;
  folio_final: number;
}
