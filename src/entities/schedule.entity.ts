import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User, RealEstate } from './index';

@Entity('schedules_users_properties')
export class Schedule {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'timestamp' })
    date: string

    @Column({ type: 'timetz' })
    hour: string

    @ManyToOne(() => RealEstate)
    realEstate: RealEstate

    @ManyToOne(() => User)
    user: User

}