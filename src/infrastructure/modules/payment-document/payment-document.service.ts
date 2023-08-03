import { IPaymentDocumentPort } from '@domain/payment-document';
import { SQL_ADAPTER } from '@infrastructure/application/adapters/database';
import { SqlService } from '@infrastructure/application/adapters/database/sql.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class PaymentDocumentService implements IPaymentDocumentPort {
  constructor(
    @Inject(SQL_ADAPTER)
    private readonly sqlService: SqlService,
  ) {}

  async findPaymentDocumentById(id: number): Promise<unknown> {
    const query = `SELECT text FROM payment_document WHERE id = ${id}`;

    const result = await this.sqlService.query(query);
    if (!result) {
      throw new Error(`No record found for id: ${id}`); // handle this error appropriately in your application
    }
    // If your query returns multiple fields, you need to select them appropriately here
    return result;
  }

  async getDocuments(
    processId: number,
    route: string,
    documentType: number,
    branchName: string,
    environment: string,
  ): Promise<unknown> {
    let query = '';
    if (environment === 'QA') {
      query = `SELECT * FROM doc_cobro_QA WHERE id_proceso=${processId} AND id_servicio IN ( SELECT id_servicio FROM servicios WHERE id_ruta =( SELECT id_ruta FROM rutas WHERE encargado ='${route}' AND IFNULL(id_tipo_documento,1)= ${documentType} AND id_sucursal =(SELECT id_sucursal FROM sucursal WHERE nombre ='${branchName}')) )`;
    } else {
      query = `SELECT * FROM doc_cobro WHERE id_proceso=${processId} AND id_servicio IN ( SELECT id_servicio FROM servicios WHERE id_ruta =( SELECT id_ruta FROM rutas WHERE encargado ='${route}' AND IFNULL(id_tipo_documento,1)= ${documentType} AND id_sucursal =(SELECT id_sucursal FROM sucursal WHERE nombre ='${branchName}')) )`;
    }
    return await this.sqlService.query(query);
  }
}
