import { DocumentDto } from '../dto';

export const GET_DOCUMENT_ADAPTER = 'GetDocumentAdapter';

export interface IDocumentPort {
  getDocuments(): Promise<DocumentDto[]>;
  callDteMySql(
    access: number,
    processId: string,
    routeId: string,
    documentType: string,
    branch: string,
  ): Promise<unknown>;
}
