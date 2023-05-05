import { Request,Response } from "express";
import { TUserRequest,TUserResponse } from "../../interfaces/users/users.intefaces";
import { postUsersServices } from "../../services/users";



const postUsers = async (
      req:Request,
      res:Response
      ):Promise<Response> => {

   const userData:TUserRequest = req.body

   const newUser:TUserResponse = await postUsersServices(userData)

   return res.status(201).json(newUser)

}

export default postUsers