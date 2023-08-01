import {
  GET_PAYMENT_METHOD_ADAPTER,
  GetPaymentMethodsUseCase,
} from '@domain/payment-method';
import { Module } from '@nestjs/common';
import { PaymentMethodsController } from './payment-method.controller';
import { PaymentMethodService } from './payment-method.service';

@Module({
  controllers: [PaymentMethodsController],
  providers: [
    GetPaymentMethodsUseCase,
    {
      provide: GET_PAYMENT_METHOD_ADAPTER,
      useClass: PaymentMethodService,
    },
  ],
})
export class PaymentMethodsModule {}
