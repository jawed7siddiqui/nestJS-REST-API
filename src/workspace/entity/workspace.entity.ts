import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity('workspace')
export class WorkspaceEntity {
  @PrimaryGeneratedColumn()
  id: number;

   @Column({ length: 425,nullable: true })
    name:string;

    @Column({ length: 225,nullable: true })
    description:string;

    @Column({ length: 125,nullable: true })
    user_id:string; 

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
