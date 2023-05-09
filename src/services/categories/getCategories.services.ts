import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";


const getCategoriesServices = async ():Promise<Category[]> =>{

   const userRepository:Repository<Category> = AppDataSource.getRepository(Category)

   const categories:Category[] | null = await userRepository
      .createQueryBuilder('categories')
      .select()
      .getMany()

   return categories

}



export default getCategoriesServices