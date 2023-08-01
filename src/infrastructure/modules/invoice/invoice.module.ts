import { SaveInvoiceUseCase } from '@domain/invoice/set-invoice.use-case';
import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { SAVE_INVOICE_ADAPTER } from '@domain/invoice/port/set-invoice.port';
import { InvoiceService } from './invoice.service';

@Module({
  controllers: [InvoiceController],
  providers: [
    SaveInvoiceUseCase,
    {
      provide: SAVE_INVOICE_ADAPTER,
      useClass: InvoiceService,
    },
  ],
})
export class InvoiceModule {}
