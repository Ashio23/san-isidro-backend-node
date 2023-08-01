import { InvoiceDto } from '../dto/invoice.dto';

export const SAVE_INVOICE_ADAPTER = 'SaveInvoiceAdapter';
export interface IInvoicePort {
  saveInvoice(invoice: InvoiceDto): Promise<InvoiceDto>;
}
