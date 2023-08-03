import { InvoiceDto } from '@domain/invoice/dto/invoice.dto';

export class InvoiceResponseDto implements InvoiceDto {
  id: number;
  rut: string;
  name: string;
  amount: number;
  date: Date;
}

export interface ResultItem {
  id: number;
  rut: string;
  name: string;
  amount: number;
  date: Date;
}
