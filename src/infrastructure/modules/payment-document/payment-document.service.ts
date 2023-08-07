import { IPaymentDocumentPort } from '@domain/payment-document';
import {
  SQL_ADAPTER,
  SqlService,
} from '@infrastructure/application/adapters/database';
import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';

@Injectable()
export class PaymentDocumentService implements IPaymentDocumentPort {
  constructor(
    @Inject(SQL_ADAPTER)
    private readonly sqlService: SqlService,
  ) {}

  async findPaymentDocumentById(id: number): Promise<unknown> {
    const query = `SELECT dte FROM doc_cobro WHERE id_doc_cobro = ${id}`;

    const result = await this.sqlService.query(query);
    if (!result || Object.keys(result).length === 0) {
      throw new HttpException(
        `No record found for Procces id: ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }

  async getDocuments(
    processId: number,
    route: string,
    documentType: number,
    branchName: string,
  ): Promise<unknown> {
    const query = `SELECT * FROM doc_cobro WHERE id_proceso=${processId} AND id_servicio IN ( SELECT id_servicio FROM servicios WHERE id_ruta =( SELECT id_ruta FROM rutas WHERE encargado ='${route}' AND IFNULL(id_tipo_documento,1)= ${documentType} AND id_sucursal =(SELECT id_sucursal FROM sucursal WHERE nombre ='${branchName}')) )`;
    const result = await this.sqlService.query(query);
    Logger.log(result);
    if (!result || Object.keys(result).length === 0) {
      throw new HttpException(
        `No record found for Procces id: ${processId}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }
}
