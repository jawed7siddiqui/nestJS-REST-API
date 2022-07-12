import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

   @Column({ length: 125,nullable: true })
    name:string;

    @Column({ length: 125,nullable: true })
    phone:string;

    @Column({ length: 125,nullable: true })
    title:string;

    @Column({ length: 125,nullable: true })
    dob:string;

    @Column({ length: 125,nullable: true })
    skype:string;

    @Column({ length: 125,nullable: true })
    working_status:string;

    @Column({ length: 125,nullable: true })
    work_anniversary:string;

    @Column({ length: 125,nullable: true })
    timezone:string;

    @Column({ length: 125,nullable: true })
    time_format:string;

    @Column({ length: 125,nullable: true })
    date_format:string;

    @Column({ length: 125,nullable: true })
    device:string;

    @Column({ length: 125,nullable: true })
    location:string;

    @Column({ length: 125,nullable: true })
    avatar:string;

    @Column({ length: 125,nullable: true })
    lat:string;

    @Column({ length: 125,nullable: true })
    long:string;

    @Column({ length: 125,nullable: true })
    notification:string;

    @Column({ length: 125,nullable: true })
    email:string;

    @Column({ length: 125,nullable: true })
    password:string;

    @Column({ length: 125,nullable: true })
    working_date:string;

    @Column() 
    isActive:boolean;

    // @Column({ type: 'date' }) 
    // created_at:string;

    // @Column({ length: 125,nullable: true }) // Recommended
    // created_at: string;

    // @Column({ length: 125,nullable: true }) // Recommended
    // updated_at: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

}
