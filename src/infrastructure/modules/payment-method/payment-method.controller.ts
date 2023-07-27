import { Controller, Get } from '@nestjs/common';
import { PaymentMethodService } from './payment-method.service';
import { PaymentMethodDto } from './entity';

@Controller('formasPago')
export class PaymentMethodController {
  constructor(private readonly formaPagoService: PaymentMethodService) {}

  @Get()
  findAll(): PaymentMethodDto[] {
    return this.formaPagoService.findAll();
  }
}
