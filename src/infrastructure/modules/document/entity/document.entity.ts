import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('documentos')
export class Documento {
  @PrimaryColumn()
  id: string;

  @Column()
  descripcion: string;
}
