import { Router } from "express";
import { checkValidAdminToken, checkValidToken } from "../../middlewares/token";
import { checkDuplicateCategory } from "../../middlewares/categories";

import {
   getCategories,
   getCategoriesAndRealEstate,
   postCategories,
} from "../../controllers/categories";

const categoriesRoutes: Router = Router();

categoriesRoutes.post("",
   checkValidToken,
   checkValidAdminToken,
   checkDuplicateCategory,
   postCategories
);

categoriesRoutes.get("", getCategories);

categoriesRoutes.get("/:id/realEstate", getCategoriesAndRealEstate);

export default categoriesRoutes;
