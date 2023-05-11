import { Request, Response } from "express";
import { getCategoriesAndRealEstateServices } from "../../services/categories";
import { Category } from "../../entities";

const getCategoriesAndRealEstate = async (
   req: Request,
   res: Response
): Promise<Response> => {
   const categoryId: number = parseInt(req.params.id);

   const newArrayCategory: Category = await getCategoriesAndRealEstateServices(categoryId);

   return res.status(200).json(newArrayCategory);
};

export default getCategoriesAndRealEstate;
