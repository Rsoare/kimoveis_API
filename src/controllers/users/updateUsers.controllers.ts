import { Request, Response } from "express";
import {
   TUserResponse,
   updateRequest,
} from "../../interfaces/users/users.intefaces";

import { updateUsersServices } from "../../services/users";

const updateUsers = async (
   req:Request,
   res:Response)
   :Promise<Response> => {

   const dataBody: updateRequest = req.body;

   const userId: number = parseInt(req.params.id);

   const newUser: TUserResponse = await updateUsersServices(dataBody, userId);

   return res.status(200).json(newUser);
};

export default updateUsers;
