import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { RealEstate } from "./real_estate.entities";
import { User } from "./users.entities";

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

export { Schedule };
