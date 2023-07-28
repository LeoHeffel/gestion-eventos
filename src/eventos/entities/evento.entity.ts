import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'eventos' })
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({})
  title: string;
  @Column({ type: 'date' })
  date: Date;
  @Column({ type: 'time' })
  hour: Date;
  @Column()
  description: string;
  @Column({ nullable: true })
  reminder: string;
}
