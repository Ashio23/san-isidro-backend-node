import { Injectable } from '@nestjs/common';
import { FormaPago } from './entity';

@Injectable()
export class FormaPagoService {
  private readonly formasPago: FormaPago[] = [
    { id: '1', descripcion: 'Contado' },
    { id: '2', descripcion: 'Crédito' },
  ];

  findAll(): FormaPago[] {
    return this.formasPago;
  }
}
