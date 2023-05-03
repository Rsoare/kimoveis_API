import {
   Column,
   CreateDateColumn,
   Entity,
   JoinColumn,
   ManyToOne,
   OneToMany,
   OneToOne,
   PrimaryGeneratedColumn,
   UpdateDateColumn,
} from "typeorm";

import { Schedule } from "./schedules.entities";
import { Address } from "./addresses.entities";
import { Category } from "./categories.entities";


@Entity("real_estate")
class RealEstate {
   @PrimaryGeneratedColumn("increment")
   id: number;

   @Column({ default: "false", type: "boolean" })
   sold: boolean;

   @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
   value: number;

   @Column({ type: "integer" })
   size: number;

   @CreateDateColumn()
   createdAt: Date | string;

   @UpdateDateColumn()
   updatedAt: Date | string;

   @OneToOne(() => Address, (address) => address.realEstate)
   @JoinColumn()
   address: Address;

   @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
   schedule: Schedule[];

   @ManyToOne(() => Category)
   category: Category;
}

export { RealEstate };
