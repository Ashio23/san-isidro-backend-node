import { Inject, Injectable } from '@nestjs/common';
import { PAYMENT_DOCUMENT_ADAPTER, IPaymentDocumentPort } from './port';

@Injectable()
export class FindPaymentDocumentUseCase {
  constructor(
    @Inject(PAYMENT_DOCUMENT_ADAPTER)
    private readonly paymentDocumentPort: IPaymentDocumentPort,
  ) {}

  async findPaymentDocumentById(id: number) {
    return await this.paymentDocumentPort.findPaymentDocumentById(id);
  }
  async getDocuments(
    processId: number,
    route: string,
    documentType: number,
    branchName: string,
    environment: string,
  ): Promise<unknown> {
    return await this.paymentDocumentPort.getDocuments(
      processId,
      route,
      documentType,
      branchName,
      environment,
    );
  }
}
