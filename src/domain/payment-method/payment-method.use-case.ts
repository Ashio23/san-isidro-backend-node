import { Inject, Injectable } from '@nestjs/common';
import { GET_PAYMENT_METHOD_ADAPTER, IPaymentMethodPort } from './port';

@Injectable()
export class GetPaymentMethodsUseCase {
  constructor(
    @Inject(GET_PAYMENT_METHOD_ADAPTER)
    private readonly paymentMethodPort: IPaymentMethodPort,
  ) {}

  async execute() {
    return this.paymentMethodPort.getPaymentMethods();
  }
}
