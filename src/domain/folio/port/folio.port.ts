import { IFolioDto } from '../dto';

export const FOLIO_PORT = 'folio_port';
export interface IFolioPort {
  findFolios(): Promise<unknown>;
  updateFolio(body: IFolioDto): Promise<void>;
}
