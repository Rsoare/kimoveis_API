import { Request, Response } from "express";
import { getUsersServices } from "../../services/users";
import { User } from "../../entities";



const getUsers = async (
   req:Request,
   res:Response
   ):Promise<Response> =>{

      const newArrayUsers:User[] = await getUsersServices()
      
      return res.status(200).json(newArrayUsers)
   }

   
   export default getUsers