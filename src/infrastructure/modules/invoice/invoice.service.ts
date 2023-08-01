import { IInvoicePort } from '@domain/invoice/port/set-invoice.port';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { InvoiceResponseDto, ResultItem } from './dto/invoice.dto';

@Injectable()
export class InvoiceService implements IInvoicePort {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async saveInvoice(invoice: InvoiceResponseDto): Promise<InvoiceResponseDto> {
    const result = await this.manager.query<ResultItem[]>(
      'CALL SP_SAVE_INVOICE(?, ?, ?, ?, ?)',
      [invoice.id, invoice.rut, invoice.name, invoice.amount, invoice.date],
    );

    return new InvoiceResponseDto(
      result[0].id,
      result[0].rut,
      result[0].name,
      result[0].amount,
      result[0].date,
    );
  }
}
