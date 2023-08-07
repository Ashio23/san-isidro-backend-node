import { IInvoicePort } from '@domain/invoice';
import {
  SQL_ADAPTER,
  SqlService,
} from '@infrastructure/application/adapters/database';
import { Inject, Injectable } from '@nestjs/common';
import { InvoiceResponseDto } from './dto/invoice.dto';

@Injectable()
export class InvoiceService implements IInvoicePort {
  constructor(@Inject(SQL_ADAPTER) private readonly sqlService: SqlService) {}

  async saveInvoice(invoice: InvoiceResponseDto): Promise<unknown> {
    return await this.sqlService.query(
      `CALL SP_SAVE_INVOICE(${invoice.id}, ${invoice.rut}, ${invoice.name}, ${invoice.amount}, ${invoice.date})`,
    );
  }
}
