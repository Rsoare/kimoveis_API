import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./real_estate.entities";
import User from "./users.entities";



@Entity("schedules")
class Schedule  {
   @PrimaryGeneratedColumn("increment")
   id: number;

   @Column({ type: "date" })
   date: Date | string;

   @Column({ type: "time" })
   hour: Date;

   @ManyToOne(() => User,(user) => user.schedules)
   user: User;

   @ManyToOne(() => RealEstate, (RealEstate) => RealEstate.schedule)
   realEstate: RealEstate;
}

export default Schedule ;
