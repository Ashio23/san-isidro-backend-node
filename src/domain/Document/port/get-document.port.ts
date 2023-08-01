import { DocumentDto } from '../dto';

export const GET_DOCUMENT_ADAPTER = 'GetDocumentAdapter';

export interface IDocumentPort {
  getDocuments(): Promise<DocumentDto[]>;
}
