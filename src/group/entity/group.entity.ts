import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity('group')
export class GroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

   @Column({ length: 425,nullable: true })
    name:string;

    @Column({ length: 225,nullable: true })
    description:string;

    @Column({ length: 125,nullable: true })
    user_id:string; 

    @Column({ length: 125,nullable: true })
    workspace_id:string; 

    @Column() 
    isActive:boolean;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

}
