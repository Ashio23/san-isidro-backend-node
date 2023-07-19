import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comuna')
export class Comuna {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'com_nombre' })
  nombre: string;
}
