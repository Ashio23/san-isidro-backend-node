import { IInvoiceDto, IInvoiceResponse } from './../dto';

export const SAVE_INVOICE_ADAPTER = 'SaveInvoiceAdapter';
export interface IInvoicePort {
  saveInvoiceFg(invoice: IInvoiceDto): Promise<IInvoiceResponse>;
}
