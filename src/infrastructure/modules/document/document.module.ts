import { GetDocumentsUseCase } from '@domain/Document/get-document.use-case';
import { GET_DOCUMENT_ADAPTER } from '@domain/Document/port/get-document.port';
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
