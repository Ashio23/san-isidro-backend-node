import { GetPaymentMethodsUseCase } from '@domain/payment-method';
import { Controller, Get } from '@nestjs/common';

@Controller('payment-methods')
export class PaymentMethodsController {
  constructor(
    private readonly getPaymentMethodsUseCase: GetPaymentMethodsUseCase,
  ) {}

  @Get()
  async getPaymentMethods() {
    return await this.getPaymentMethodsUseCase.execute();
  }
}
