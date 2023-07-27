import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentoController } from './document.controller';
import { DocumentoService } from './document.service';
import { Documento } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([Documento])],
  controllers: [DocumentoController],
  providers: [DocumentoService],
  exports: [DocumentoService],
})
export class DocumentModule {}
