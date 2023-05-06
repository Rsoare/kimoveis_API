import { Router } from "express";
import { userSchemaRequest} from "../../schemas/users/users.schemas";
import checkDuplicateEmail from "../../middlewares/users/checkDuplicateEmail";
import validBodySchema from "../../middlewares/validBodySchema";
import { getUsers, postUsers } from "../../controllers/users";
import { checkValidAdminToken, checkValidToken } from "../../middlewares/token";



const userRoutes:Router = Router()

userRoutes.post('',
   checkDuplicateEmail,
   validBodySchema(userSchemaRequest),
   postUsers)

userRoutes.get('',
   checkValidToken,
   checkValidAdminToken,
   getUsers)


userRoutes.patch('/:id')
userRoutes.delete('/:id')


export default userRoutes