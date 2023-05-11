import { Router } from "express";
import { postSchedules } from "../../controllers/schedules";
import validBodySchema from "../../middlewares/validBodySchema";
import { schedulesRequest } from "../../schemas/schedules";
import { checkValidToken } from "../../middlewares/token";
import { checkDuplicateHour, checkValidHour,} from "../../middlewares/schedules";

const schedulesRoutes:Router = Router()

schedulesRoutes.post("",
   checkValidToken,
   validBodySchema(schedulesRequest),
   checkValidHour,
   checkDuplicateHour,
   postSchedules)

schedulesRoutes.get("/realEstate/:id")


export default schedulesRoutes