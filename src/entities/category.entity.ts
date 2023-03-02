import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('categories')
export class Category {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', unique: true })
    name: string
    
}