import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('formasPago')
export class PaymentMethodDto {
  @PrimaryColumn()
  id: string;

  @Column()
  descripcion: string;
}
