import { Inject, Injectable } from '@nestjs/common';
import { IInvoicePort, SAVE_INVOICE_ADAPTER } from './port/set-invoice.port';
import { IInvoiceDto, IInvoiceResponse } from './dto';

@Injectable()
export class SaveInvoiceUseCase {
  constructor(
    @Inject(SAVE_INVOICE_ADAPTER)
    private readonly invoicePort: IInvoicePort,
  ) {}

  async execute(invoice: IInvoiceDto): Promise<IInvoiceResponse> {
    return this.invoicePort.saveInvoiceFg(invoice);
  }
}
