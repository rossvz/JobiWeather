import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Note {

  @PrimaryGeneratedColumn()
  noteId: number

  @Column()
  temperature: number

  @Column()
  emoji: string

  @Column()
  notes: string
}