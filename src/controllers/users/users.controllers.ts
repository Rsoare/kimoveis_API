import { Request,Response } from "express";
import { TUserRequest,TUserResponse } from "../../interfaces/users/users.intefaces";
import postUsersServices from "../../services/users/postUsers.services";


const postUsers = async (req:Request,res:Response):Promise<Response> => {

   const userData:TUserRequest = req.body

   const newUser = await postUsersServices(userData)

   return res.status(201).json(newUser)

}

export {postUsers}