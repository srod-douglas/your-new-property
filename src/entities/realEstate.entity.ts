import { PrimaryGeneratedColumn, Entity, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Address, Category } from './index';

@Entity('real_estate')
export class RealEstate {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'boolean', default: false })
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    value: number | string
    
    @Column({ type: 'integer' })
    size: number

    @Column({ type: 'timestamp' })
    createdAt: Date

    @Column({ type: 'timestamp' })
    updatedAt: Date

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category)
    category: Category
    
}