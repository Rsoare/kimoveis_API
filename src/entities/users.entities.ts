import {
   BeforeInsert,
   Column,
   CreateDateColumn,
   DeleteDateColumn,
   Entity,
   OneToMany,
   PrimaryGeneratedColumn,
   UpdateDateColumn,
} from "typeorm";
import Schedule from "./schedules.entities";
import { hash } from "bcryptjs";


@Entity("users") 

class User  {
   @PrimaryGeneratedColumn("increment")
   id: number;

   @Column({ type: "varchar", length: 45 })
   name: string;

   @Column({ type: "varchar", length: 45, unique: true })
   email: string;

   @Column({ default: "false", type: "boolean" })
   admin: boolean;

   @Column({ type: "varchar", length: 120,select:false })
   password: string;
   
   @CreateDateColumn({type:"date"})
   createdAt: string | Date;

   @UpdateDateColumn({type:"date"})
   updatedAt: string | Date;
   
   @DeleteDateColumn({ nullable: true,type:"date" })
   deletedAt?: Date;

   @BeforeInsert()
   async insertHashPassword(){
      this.password = await hash(this.password,10)
   }
   
   @OneToMany(() => Schedule, (schedules) => schedules.user)
   schedules: Schedule[];
}

export default User ;
