import { IDocumentPort } from '@domain/Document';
import { Inject, Injectable } from '@nestjs/common';
import { DocumentResponseDto } from './entity';
import {
  SQL_ADAPTER,
  SqlService,
} from '@infrastructure/application/adapters/database';

@Injectable()
export class DocumentService implements IDocumentPort {
  constructor(@Inject(SQL_ADAPTER) private readonly sqlService: SqlService) {}
  getDocuments(): Promise<DocumentResponseDto[]> {
    return Promise.resolve([
      { id: '1', description: 'Boleta Electrónica' },
      { id: '2', description: 'Factura Electrónica' },
      { id: '33', description: 'Electronic Invoice' },
      { id: '34', description: 'Non-Affected or Exempt Electronic Invoice' },
      { id: '39', description: 'Electronic Receipt' },
      { id: '41', description: 'Exempt Electronic Receipt' },
      { id: '43', description: 'Electronic Invoice Liquidation' },
      { id: '46', description: 'Electronic Purchase Invoice' },
      { id: '52', description: 'Electronic Dispatch Guide' },
      { id: '56', description: 'Electronic Debit Note' },
      { id: '61', description: 'Electronic Credit Note' },
      { id: '801', description: 'Purchase Order' },
    ]);
  }
  async callDteMySql(
    access: number,
    processId: string,
    routeId: string,
    documentType: string,
    branch: string,
  ): Promise<unknown> {
    const query = `
    select
      *
    from
      doc_cobro
    where
    id_proceso=${processId} and
    id_servicio in (select id_servicio from servicios where id_ruta =(select id_ruta from rutas where encargado='${routeId}') and
    ifnull(id_tipo_documento,1)= ${documentType} and
    id_sucursal=(select id_sucursal from sucursal where nombre='${branch}'))`;

    const result = await this.sqlService.query(query);
    if (!result || Object.keys(result).length === 0) {
      throw new Error(`No record found for processId: ${processId}`);
    }
    return result;
  }
}
