import { NextFunction, Request, Response } from "express";
import { AppError } from "../../error/error";

const checkValidAdminToken = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<Response | void> => {

   const admin:boolean = res.locals.admin
   const sub:number = parseInt(res.locals.sub)

   const paramsId:number = parseInt(req.params.id) 

   if(!admin && sub !== paramsId){
      throw new AppError("Insufficient permission",403)
   }



   return next()
};

export default checkValidAdminToken