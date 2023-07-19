import { Controller, Get } from '@nestjs/common';
import { DocumentoService } from './document.service';
import { Documento } from './entity/document.entity';

@Controller('documentos')
export class DocumentoController {
  constructor(private readonly documentoService: DocumentoService) {}

  @Get()
  findAll(): Documento[] {
    return this.documentoService.findAll();
  }
}
