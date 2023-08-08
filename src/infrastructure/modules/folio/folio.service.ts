import { Inject, Injectable } from '@nestjs/common';
import { SQL_ADAPTER, SqlService } from '@application/adapters/database';
import { IFolioPort } from '@domain/folio';
@Injectable()
export class FolioService implements IFolioPort {
  constructor(
    @Inject(SQL_ADAPTER)
    private readonly sqlService: SqlService,
  ) {}

  async findFolios(): Promise<unknown> {
    const query = `select f.id_folio idfolio,
                          tp.descripcion tipo_documento,
                          f.num_folio_actual folio_actual,
                          f.num_folio_autorizado folio_final,
                          (f.num_folio_autorizado - f.num_folio_actual) sobrantes
                   from tipo_doc_sii tp, Folios_DTE f
                   where f.id_doc_cobro = tp.idtipo_doc_sii`;

    const result = await this.sqlService.query(query);
    if (!result || Object.keys(result).length === 0) {
      throw new Error('No folios found');
    }

    return result;
  }
}
