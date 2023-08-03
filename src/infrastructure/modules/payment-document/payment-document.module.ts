import {
  FindPaymentDocumentUseCase,
  PAYMENT_DOCUMENT_ADAPTER,
} from '@domain/payment-document';
import { Module } from '@nestjs/common';
import { PaymentDocumentController } from './payment-document.controller';
import { PaymentDocumentService } from './payment-document.service';

@Module({
  controllers: [PaymentDocumentController],
  providers: [
    FindPaymentDocumentUseCase,
    {
      provide: PAYMENT_DOCUMENT_ADAPTER,
      useClass: PaymentDocumentService,
    },
  ],
})
export class PaymentDocumentModule {}
