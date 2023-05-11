import { Request, Response } from "express";
import { RealEstate } from "../../entities";
import { getRealEstateServices } from "../../services/realEstate";

const getRealEstate = async (
   req: Request,
   res: Response
): Promise<Response> => {
   
   const newRealEstate: RealEstate[] = await getRealEstateServices();

   return res.status(200).json(newRealEstate);
};

export default getRealEstate;
