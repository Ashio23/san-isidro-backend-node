import { SaveInvoiceUseCase } from '@domain/invoice';
import { Controller, Post, Body } from '@nestjs/common';
import { InvoiceResponseDto } from './dto/invoice.dto';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly saveInvoiceUseCase: SaveInvoiceUseCase) {}

  @Post()
  async saveInvoice(@Body() invoice: InvoiceResponseDto): Promise<unknown> {
    return await this.saveInvoiceUseCase.execute(invoice);
  }
}
