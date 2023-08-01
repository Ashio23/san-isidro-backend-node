import { PaymentMethodDto } from '../dto';

export const GET_PAYMENT_METHOD_ADAPTER = 'GetPaymentMethodAdapter';

export interface IPaymentMethodPort {
  getPaymentMethods(): Promise<PaymentMethodDto[]>;
}
