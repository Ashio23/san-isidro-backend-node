import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('aux_cargo_fact_ocasional_QA')
export class Client {
  @PrimaryGeneratedColumn()
  id_regtistro_fact: number;

  // Define aquí el resto de las columnas
}
