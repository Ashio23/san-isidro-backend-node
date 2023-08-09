import { SaveInvoiceUseCase } from '@domain/invoice';
import { Controller, Post, Body } from '@nestjs/common';
import { InvoiceRequestDto, InvoiceResponse } from './dto';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly saveInvoiceUseCase: SaveInvoiceUseCase) {}

  @Post()
  async saveInvoice(
    @Body() invoice: InvoiceRequestDto,
  ): Promise<InvoiceResponse> {
    return (await this.saveInvoiceUseCase.execute(invoice)) as InvoiceResponse;
  }
}
