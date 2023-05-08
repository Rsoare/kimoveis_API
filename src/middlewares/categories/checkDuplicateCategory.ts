import { Response, Request, NextFunction } from "express";
import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error/error";

const checkDuplicateCategory = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<Response | void> => {
   
   const nameCategory: string = req.body.name;

   const categoryRepository: Repository<Category> =
      AppDataSource.getRepository(Category);

   const checkDuplicate = await categoryRepository.exist({
      where: { name: nameCategory },
   });

   if (checkDuplicate) {
      throw new AppError("Category already exists", 409);
   }

   return next();
};

export default checkDuplicateCategory;
