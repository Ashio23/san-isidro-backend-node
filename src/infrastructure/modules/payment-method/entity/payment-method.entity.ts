import { PaymentMethodDto } from '@domain/payment-method';

export class PaymentMethodResponse implements PaymentMethodDto {
  id: string;
  description: string;
}
