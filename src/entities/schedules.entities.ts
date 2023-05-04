import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate, User } from ".";


@Entity("schedules")
class Schedule {
   @PrimaryGeneratedColumn("increment")
   id: number;

   @Column({ type: "date" })
   date: Date;

   @Column({ type: "time" })
   hour: Date;

   @ManyToOne(() => User)
   user: User;

   @ManyToOne(() => RealEstate)
   realEstate: RealEstate;
}

export default Schedule ;
