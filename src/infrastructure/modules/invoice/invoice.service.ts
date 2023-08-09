import { IInvoicePort } from '@domain/invoice';
import {
  SQL_ADAPTER,
  SqlService,
} from '@infrastructure/application/adapters/database';
import { Inject, Injectable } from '@nestjs/common';
import { InvoiceRequestDto, InvoiceResponse } from './dto';

@Injectable()
export class InvoiceService implements IInvoicePort {
  constructor(@Inject(SQL_ADAPTER) private readonly sqlService: SqlService) {}

  async saveInvoiceFg(invoice: InvoiceRequestDto): Promise<InvoiceResponse> {
    return (await this.sqlService.query(
      `CALL SP_GUARDA_FACTURA_FG(
          ${invoice.issue_date},
          ${invoice.rut},
          ${invoice.verification_digit},
          ${invoice.name},
          ${invoice.address},
          ${invoice.commune},
          ${invoice.business_line},
          ${invoice.referenced_document},
          ${invoice.num_doc_reference},
          ${invoice.guide_number},
          ${invoice.net_amount},
          ${invoice.iva},
          ${invoice.total},
          ${invoice.due_date},
          ${invoice.payment_method},
          ${invoice.observation})`,
    )) as InvoiceResponse;
  }
}
