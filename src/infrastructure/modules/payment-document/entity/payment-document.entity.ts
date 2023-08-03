import { IPaymentDocument } from '@domain/payment-document';

export class PaymentDocumentResponseDto implements IPaymentDocument {
  id: number;
  text: string;

  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
  }
}
