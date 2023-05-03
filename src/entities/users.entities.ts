import {
   Column,
   CreateDateColumn,
   DeleteDateColumn,
   Entity,
   OneToMany,
   PrimaryGeneratedColumn,
   UpdateDateColumn,
} from "typeorm";
import { Schedule } from "./schedules.entities";


@Entity("users")
class User {
   @PrimaryGeneratedColumn("increment")
   id: number;

   @Column({ type: "varchar", length: 45 })
   name: string;

   @Column({ type: "varchar", length: 45, unique: true })
   email: string;

   @Column({ default: "false", type: "boolean" })
   admin: boolean;

   @Column({ type: "varchar", length: 120 })
   password: string;

   @CreateDateColumn()
   createdAt: Date | string;

   @UpdateDateColumn()
   updatedAt: Date | string;

   @DeleteDateColumn({ nullable: true })
   deletedAt?: Date;

   @OneToMany(() => Schedule, (schedules) => schedules.user)
   schedules: Schedule[];
}

export { User };
