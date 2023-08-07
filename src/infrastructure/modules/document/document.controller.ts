import { GetDocumentsUseCase } from '@domain/Document';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly getDocumentsUseCase: GetDocumentsUseCase) {}

  @Get()
  getDocuments() {
    return this.getDocumentsUseCase.execute();
  }
  @Get('callDteMysql')
  callDteMySql(
    @Query('access') access: number,
    @Query('processId') processId: string,
    @Query('routeId') routeId: string,
    @Query('documentType') documentType: string,
    @Query('branch') branch: string,
  ) {
    return this.getDocumentsUseCase.callDteMysqlUseCase(
      access,
      processId,
      routeId,
      documentType,
      branch,
    );
  }
}
