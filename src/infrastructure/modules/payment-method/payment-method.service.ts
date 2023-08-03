import { IPaymentMethodPort } from '@domain/payment-method';
import { Injectable } from '@nestjs/common';
import { PaymentMethodResponse } from './entity';

@Injectable()
export class PaymentMethodService implements IPaymentMethodPort {
  getPaymentMethods(): Promise<PaymentMethodResponse[]> {
    return Promise.resolve([
      { id: '1', description: 'Cash' },
      { id: '2', description: 'Credit' },
    ]);
  }
}
