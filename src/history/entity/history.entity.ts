import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity('history')
export class HistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

   @Column({ length: 425,nullable: true })
    device:string;

    @Column({ length: 225,nullable: true })
    location:string;

    @Column({ length: 125,nullable: true})
    user_id:string; 

    @Column({ length: 125,nullable: true })
    lat:string;

    @Column({ length: 125,nullable: true })
    long:string;

    @Column() 
    isActive:boolean;

    // @Column({ length: 125,nullable: true }) // Recommended
    // created_at: string;

    // @Column({ length: 125,nullable: true }) // Recommended
    // updated_at: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

}
