import { Router } from "express"
import { postCategories } from "../../controllers/categories"
import { checkValidAdminToken, checkValidToken } from "../../middlewares/token"
import { checkDuplicateCategory } from "../../middlewares/categories"

const categoriesRoutes:Router = Router()


categoriesRoutes.post("",
   checkValidToken,
   checkValidAdminToken,
   checkDuplicateCategory,
   postCategories,
   )

categoriesRoutes.get("")

categoriesRoutes.get("/:id/realEstate")

export default categoriesRoutes
