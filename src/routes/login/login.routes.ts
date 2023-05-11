import { Router } from "express";
import validBodySchema from "../../middlewares/validBodySchema";
import { loginSchemas } from "../../schemas/login/login.schemas";
import { loginPost } from "../../controllers/login";

const loginRoutes: Router = Router();

loginRoutes.post("", validBodySchema(loginSchemas), loginPost);

export default loginRoutes;
