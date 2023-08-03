import { IDocumentPort } from '@domain/Document/port/get-document.port';
import { Injectable } from '@nestjs/common';
import { DocumentResponseDto } from './entity';

@Injectable()
export class DocumentService implements IDocumentPort {
  getDocuments(): Promise<DocumentResponseDto[]> {
    return Promise.resolve([
      { id: '1', description: 'Boleta Electrónica' },
      { id: '2', description: 'Factura Electrónica' },
      { id: '33', description: 'Electronic Invoice' },
      { id: '34', description: 'Non-Affected or Exempt Electronic Invoice' },
      { id: '39', description: 'Electronic Receipt' },
      { id: '41', description: 'Exempt Electronic Receipt' },
      { id: '43', description: 'Electronic Invoice Liquidation' },
      { id: '46', description: 'Electronic Purchase Invoice' },
      { id: '52', description: 'Electronic Dispatch Guide' },
      { id: '56', description: 'Electronic Debit Note' },
      { id: '61', description: 'Electronic Credit Note' },
      { id: '801', description: 'Purchase Order' },
    ]);
  }
}
