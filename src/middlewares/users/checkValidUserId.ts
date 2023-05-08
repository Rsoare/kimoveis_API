import { NextFunction,Request,Response } from "express";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error/error";

const checkValidUserId = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<Response | void> => {
   const userId:number = parseInt(req.params.id)

   const userRepository:Repository<User> = AppDataSource.getRepository(User)

   const checkId = await userRepository.exist({where:{id:userId}})

   if(!checkId){
      throw new AppError("User not found",404)
   }

   return next()
};

export default checkValidUserId 