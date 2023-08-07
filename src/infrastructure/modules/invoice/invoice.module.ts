import { SAVE_INVOICE_ADAPTER, SaveInvoiceUseCase } from '@domain/invoice';
import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
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
