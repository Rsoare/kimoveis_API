import { Router } from "express";
import validBodySchema from "../../middlewares/validBodySchema";
import { checkValidAdminToken, checkValidToken } from "../../middlewares/token";
import { checkDuplicateEmail, checkValidUserId } from "../../middlewares/users";
import {
   updateSchemaRequest,
   userSchemaRequest,
} from "../../schemas/users/users.schemas";

import {
   deleteUsers,
   getUsers,
   postUsers,
   updateUsers,
} from "../../controllers/users";

const userRoutes: Router = Router();

userRoutes.post("",
   checkDuplicateEmail,
   validBodySchema(userSchemaRequest),
   postUsers
);

userRoutes.get("", checkValidToken, checkValidAdminToken, getUsers);

userRoutes.patch("/:id",
   checkValidUserId,
   checkValidToken,
   checkValidAdminToken,
   validBodySchema(updateSchemaRequest),
   updateUsers
);

userRoutes.delete("/:id",
   checkValidUserId,
   checkValidToken,
   checkValidAdminToken,
   deleteUsers
);

export default userRoutes;
