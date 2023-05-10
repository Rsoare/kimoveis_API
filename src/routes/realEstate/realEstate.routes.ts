import { Router } from "express";
import { getRealEstate, postRealEstate } from "../../controllers/realEstate";
import validBodySchema from "../../middlewares/validBodySchema";
import { checkValidAdminToken, checkValidToken } from "../../middlewares/token";
import { estateAndAdressRequest } from "../../schemas/realEstate/realEstate.schemas";
import checkDuplicateAddress from "../../middlewares/realEstate/checkDuplicateAddress";


const realEstatesRoutes:Router = Router()


realEstatesRoutes.post("",
   checkValidToken,
   checkValidAdminToken,
   validBodySchema(estateAndAdressRequest),
   checkDuplicateAddress,
   postRealEstate)

realEstatesRoutes.get("",getRealEstate)



export default realEstatesRoutes