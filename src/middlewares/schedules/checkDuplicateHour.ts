import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TSchedulesRequest } from "../../interfaces/schedules";
import { AppError } from "../../error/error";

const checkDuplicateHour = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<Response | void> => {

   const userId:number = parseInt(res.locals.sub)
   const dataBody:TSchedulesRequest = req.body

   const date:string = dataBody.date
   const hour:string = dataBody.hour

   const schedulesRepository:Repository<Schedule> = AppDataSource.getRepository(Schedule)
   
      const scheduleUserHour:boolean = await schedulesRepository
      .createQueryBuilder('schedules')
      .innerJoin('schedules.user','user')
      .where('schedules.hour = :hour',{hour},)
      .andWhere('schedules.date = :date',{date})
      .where('user.id = :userId',{userId})
      .getExists()


   if (scheduleUserHour) {
      throw new AppError("User schedule to this real estate at this date and time already exists",409)
   }


   const scheduleHour:boolean = await schedulesRepository
      .createQueryBuilder('schedules')
      .where('schedules.hour = :hour',{hour},)
      .andWhere('schedules.date = :date',{date})
      .getExists()

   if (scheduleHour) {
      throw new AppError("Schedule to this real estate at this date and time already exists",409)
   }

   return next();
};


export default checkDuplicateHour
