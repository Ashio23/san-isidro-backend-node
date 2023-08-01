import { Injectable } from '@nestjs/common';
import { PaymentMethodResponse } from './entity';
import { IPaymentMethodPort } from '@domain/payment-method';

@Injectable()
export class PaymentMethodService implements IPaymentMethodPort {
  getPaymentMethods(): Promise<PaymentMethodResponse[]> {
    return Promise.resolve([
      { id: '1', description: 'Cash' },
      { id: '2', description: 'Credit' },
    ]);
  }
}
