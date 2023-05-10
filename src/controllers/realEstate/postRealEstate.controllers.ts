import { Response,Request } from "express";
import { TEstateAndAdressRequest } from "../../interfaces/realEstate/realEstate.interfaces";
import { RealEstate } from "../../entities";
import { realEstateServices } from "../../services/realEstate";

const postRealEstate = async (
   req: Request,
   res: Response
): Promise<Response> => {

   const bodyData:TEstateAndAdressRequest = req.body

   const newRealEstate:RealEstate = await realEstateServices(bodyData)

   return res.status(201).json(newRealEstate)
};


export default postRealEstate