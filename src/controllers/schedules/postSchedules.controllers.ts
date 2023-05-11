import { Request, Response } from "express";
import { postSchedulesServices } from "../../services/schedules";
import { TSchedulesRequest } from "../../interfaces/schedules/schedules.interfaces";

const postSchedules = async (
   req: Request,
   res: Response
): Promise<Response> => {

   const userId: number = parseInt(res.locals.sub);

   const dataBody: TSchedulesRequest = req.body;

   const newSchedules: object = await postSchedulesServices(dataBody, userId);

   return res.status(201).json(newSchedules);
};

export default postSchedules 
