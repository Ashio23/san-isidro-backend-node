import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('formasPago')
export class FormaPago {
  @PrimaryColumn()
  id: string;

  @Column()
  descripcion: string;
}
