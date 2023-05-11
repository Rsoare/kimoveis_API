import { Request,Response } from "express";
import { RealEstate } from "../../entities";
import { getSchedulesServices } from "../../services/schedules";

const getSchedules = async (
   req: Request,
   res: Response
): Promise<Response> => {

   const realEstateId = parseInt(req.params.id);

   const realEstateAndSchedules:RealEstate = await getSchedulesServices(realEstateId);

   return res.status(200).json(realEstateAndSchedules);
};


export default getSchedules