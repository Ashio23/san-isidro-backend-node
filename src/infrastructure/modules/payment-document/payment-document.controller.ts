import { FindPaymentDocumentUseCase } from '@domain/payment-document';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('payment-document')
export class PaymentDocumentController {
  constructor(
    private readonly findPaymentDocumentUseCase: FindPaymentDocumentUseCase,
  ) {}

  @Get(':id')
  async findPaymentDocument(@Param('id') id: number) {
    return await this.findPaymentDocumentUseCase.findPaymentDocumentById(id);
  }

  @Get()
  async getDocuments(
    @Query('processId') processId: number,
    @Query('route') route: string,
    @Query('documentType') documentType: number,
    @Query('branchName') branchName: string,
    @Query('environment') environment: string,
  ) {
    return await this.findPaymentDocumentUseCase.getDocuments(
      processId,
      route,
      documentType,
      branchName,
      environment,
    );
  }
}
