import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error/error";


const checkDuplicateEmail = async (
   req:Request,
   res:Response,
   next:NextFunction):Promise<Response | void> =>{

      const email:string = req.body.email

      const userRepository:Repository<User> = AppDataSource.getRepository(User)

      const checkDuplicate = await userRepository.exist({where:{email:email}})

      if(checkDuplicate){
         throw new AppError("Email already exists",409)
      }

      return next()
}

export default checkDuplicateEmail