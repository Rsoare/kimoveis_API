import { Repository } from "typeorm";
import { Category } from "../../entities";
import { TCategoriesRequest } from "../../interfaces/categories/categories.interfaces";
import { AppDataSource } from "../../data-source";

const postCategoriesServices = async (bodyData:TCategoriesRequest):Promise<Category> => {

   const categoryRepository:Repository<Category> = AppDataSource.getRepository(Category)

   const category:Category = categoryRepository.create(bodyData)

   await categoryRepository.save(category)

   return category
}

export default postCategoriesServices