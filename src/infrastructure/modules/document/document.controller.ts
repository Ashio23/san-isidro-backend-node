import { GetDocumentsUseCase } from '@domain/Document';
import { Controller, Get } from '@nestjs/common';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly getDocumentsUseCase: GetDocumentsUseCase) {}

  @Get()
  getDocuments() {
    return this.getDocumentsUseCase.execute();
  }
}
