import { Router } from "express"
import { postCategories } from "../../controllers/categories"

const categoriesRoutes:Router = Router()


categoriesRoutes.post("",postCategories)

categoriesRoutes.get("")

categoriesRoutes.get("/:id/realEstate")


