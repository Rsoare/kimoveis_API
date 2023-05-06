import { NextFunction, Request, Response } from "express";
import { AppError } from "../../error/error";

const checkValidAdminToken = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<Response | void> => {

   const admin:boolean = res.locals.admin
   const UserId:number = parseInt(res.locals.sub)

   if(!admin){
      throw new AppError("Insufficient permission",403)
   }

   return next()
};

export default checkValidAdminToken