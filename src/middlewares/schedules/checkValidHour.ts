import { NextFunction,Request,Response } from "express";
import { AppError } from "../../error/error";
import { TSchedulesRequest } from "../../interfaces/schedules";


const checkValidHour = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<Response | void> => {

   const dataBody:TSchedulesRequest = req.body

   const date:string = dataBody.date
   const hour:number = parseFloat(dataBody.hour)

   const getDate:number = new Date(date).getDay()

   if(getDate < 1 || getDate > 5){
      throw new AppError("Invalid date, work days are monday to friday",400)
   }

   if (hour < 8 || hour > 18) {
      throw new AppError("Invalid hour, available times are 8AM to 18PM",400)
   }

   return next();
};

export default checkValidHour
