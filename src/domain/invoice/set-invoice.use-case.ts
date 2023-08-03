import { Inject, Injectable } from '@nestjs/common';
import { IInvoicePort, SAVE_INVOICE_ADAPTER } from './port/set-invoice.port';
import { InvoiceDto } from './dto/invoice.dto';

@Injectable()
export class SaveInvoiceUseCase {
  constructor(
    @Inject(SAVE_INVOICE_ADAPTER)
    private readonly invoicePort: IInvoicePort,
  ) {}

  async execute(invoice: InvoiceDto): Promise<unknown> {
    return this.invoicePort.saveInvoice(invoice);
  }
}
