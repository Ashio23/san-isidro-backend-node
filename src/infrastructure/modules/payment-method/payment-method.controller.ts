import { Controller, Get } from '@nestjs/common';
import { FormaPagoService } from './payment-method.service';
import { FormaPago } from './entity';

@Controller('formasPago')
export class FormaPagoController {
  constructor(private readonly formaPagoService: FormaPagoService) {}

  @Get()
  findAll(): FormaPago[] {
    return this.formaPagoService.findAll();
  }
}
