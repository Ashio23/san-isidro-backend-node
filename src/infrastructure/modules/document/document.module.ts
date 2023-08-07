import { GET_DOCUMENT_ADAPTER, GetDocumentsUseCase } from '@domain/Document';
import { Module } from '@nestjs/common';
import { DocumentsController } from './document.controller';
import { DocumentService } from './document.service';

@Module({
  controllers: [DocumentsController],
  providers: [
    GetDocumentsUseCase,
    {
      provide: GET_DOCUMENT_ADAPTER,
      useClass: DocumentService,
    },
  ],
})
export class DocumentModule {}
