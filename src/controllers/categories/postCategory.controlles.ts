import { Request, Response } from "express";
import { Category } from "../../entities";
import { postCategoriesServices } from "../../services/categories";
import { TCategoriesRequest } from "../../interfaces/categories/categories.interfaces";

const postCategories = async (
   req: Request,
   res: Response
): Promise<Response> => {
   
   const categorieBody: TCategoriesRequest = req.body;

   const newCategory: Category = await postCategoriesServices(categorieBody);

   return res.status(201).json(newCategory);
};

export default postCategories;
