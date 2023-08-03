export const PAYMENT_DOCUMENT_ADAPTER = 'paymentDocumentAdapter';

export interface IPaymentDocumentPort {
  findPaymentDocumentById(id: number): Promise<unknown>;
  getDocuments(
    processId: number,
    route: string,
    documentType: number,
    branchName: string,
    environment: string,
  ): Promise<unknown>;
}
