import { Router } from "express";
import { postUsers } from "../../controllers/users/users.controllers";
import { userSchemaRequest } from "../../schemas/users/users.schemas";
import validBodySchema from "../../middlewares/validBodySchema";

const userRoutes:Router = Router()

userRoutes.post('',validBodySchema(userSchemaRequest),postUsers)
userRoutes.get('')
userRoutes.patch('/:id')
userRoutes.delete('/:id')


export default userRoutes