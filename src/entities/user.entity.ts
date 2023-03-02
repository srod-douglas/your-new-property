import { PrimaryGeneratedColumn, Column, Entity, ManyToOne  } from 'typeorm';
import { Schedule } from './schedule.entity';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45 })
    name: string

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string

    @Column({ type: 'boolean', default: false })
    admin: boolean

    @Column({ type: 'varchar', length: 120 })
    password: string

    @Column({ type: 'datetime' })
    createdAt: Date

    @Column({ type: 'datetime' })
    updatedAt: Date

    @Column({ type: 'datetime' })
    deletedAt: Date

}