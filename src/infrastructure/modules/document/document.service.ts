import { Injectable } from '@nestjs/common';
import { Documento } from './entity/document.entity';

@Injectable()
export class DocumentoService {
  private readonly documentos: Documento[] = [
    { id: '33', descripcion: 'Factura Electrónica' },
    { id: '34', descripcion: 'Factura No Afecta o Exenta Electrónica' },
    { id: '39', descripcion: 'Boleta Electrónica' },
    { id: '41', descripcion: 'Boleta Exenta Electrónica' },
    { id: '43', descripcion: 'Liquidación - Factura Electrónica' },
    { id: '46', descripcion: 'Factura de Compra Electrónica' },
    { id: '52', descripcion: 'Guía de Despacho Electrónica' },
    { id: '56', descripcion: 'Nota de Débito Electrónica' },
    { id: '61', descripcion: 'Nota de Crédito Electrónica' },
    { id: '801', descripcion: 'Orden de Compra' },
  ];

  findAll(): Documento[] {
    return this.documentos;
  }
}
