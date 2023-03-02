import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';
import { User, RealEstate } from './index';

@Entity('schedules_users_properties')
export class Schedule {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'timestamp' })
    date: Date

    @Column({ type: 'time' })
    hour: Date

    @ManyToOne(() => RealEstate)
    realEstate: RealEstate

    @ManyToOne(() => User)
    user: User

}