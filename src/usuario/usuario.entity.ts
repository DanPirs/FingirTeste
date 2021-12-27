import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string

  @Column({ length: 100 })
  email: string

  @Column({ length: 100 })
  contato: string

  @Column({ length: 255 })
  senha: string

}