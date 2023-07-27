import { Injectable } from '@nestjs/common';
import { PaymentMethodDto } from './entity';

@Injectable()
export class PaymentMethodService {
  private readonly paymentMethod: PaymentMethodDto[] = [
    { id: '1', descripcion: 'Contado' },
    { id: '2', descripcion: 'Crédito' },
  ];

  findAll(): PaymentMethodDto[] {
    return this.paymentMethod;
  }
}
