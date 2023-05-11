import { Request, Response } from "express";
import { TSchedulesRequest } from "../../interfaces/schedules";
import { postSchedulesServices } from "../../services/schedules";

const postSchedules = async (
   req: Request,
   res: Response
): Promise<Response> => {

   const userId:number = parseInt(res.locals.sub)
   
   const dataBody:TSchedulesRequest = req.body

   const newSchedules:object = await postSchedulesServices(dataBody,userId)

   return res.status(201).json(newSchedules)
};


export {postSchedules}