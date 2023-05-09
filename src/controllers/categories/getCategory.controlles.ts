import { Request, Response } from "express";
import { Category } from "../../entities";
import { getCategoriesServices } from "../../services/categories";

const getCategories = async (
   req: Request,
   res: Response
): Promise<Response> => {

   const newArrayCategory:Category[] = await getCategoriesServices()

   return res.status(200).json(newArrayCategory)
};



export default getCategories