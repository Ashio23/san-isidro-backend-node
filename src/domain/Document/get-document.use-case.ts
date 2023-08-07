import { Inject, Injectable } from '@nestjs/common';
import { GET_DOCUMENT_ADAPTER, IDocumentPort } from './port/get-document.port';

@Injectable()
export class GetDocumentsUseCase {
  constructor(
    @Inject(GET_DOCUMENT_ADAPTER)
    private readonly documentPort: IDocumentPort,
  ) {}

  execute() {
    return this.documentPort.getDocuments();
  }
  callDteMysqlUseCase(
    access: number,
    processId: string,
    routeId: string,
    documentType: string,
    branch: string,
  ) {
    return this.documentPort.callDteMySql(
      access,
      processId,
      routeId,
      documentType,
      branch,
    );
  }
}
