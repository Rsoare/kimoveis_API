import { Request, Response } from "express";
import { TCategoriesRequest } from "../../interfaces/categories/categories.interfaces";
import { Category } from "../../entities";
import { postCategoriesServices } from "../../services/categories";

const postCategories = async (
   req: Request,
   res: Response
): Promise<Response> => {

   const categorieBody:TCategoriesRequest = req.body

   const newCategorie:Category = await postCategoriesServices(categorieBody)

   return res.status(201).json(newCategorie)

};

export default postCategories
