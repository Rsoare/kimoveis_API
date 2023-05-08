import { Request, Response } from "express";
import { deleteUsersServices } from "../../services/users";

const deleteUsers = async (req:Request,res:Response):Promise<Response> => {

   const userId:number = parseInt(req.params.id)

   await deleteUsersServices(userId)

   return res.status(204).send()

}

export default deleteUsers