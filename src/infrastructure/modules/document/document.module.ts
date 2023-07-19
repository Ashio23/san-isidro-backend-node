import { Module } from '@nestjs/common';
import { DocumentoController } from './document.controller';
import { DocumentoService } from './document.service';

@Module({
  imports: [],
  controllers: [DocumentoController],
  providers: [DocumentoService],
})
export class DocumentModule {}
