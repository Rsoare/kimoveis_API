import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error/error";


   const getCategoriesAndRealEstateServices = async (categoryId:number):Promise<Category> => {

      const userRepository:Repository<Category> = AppDataSource.getRepository(Category)
   
      const checkCategoryExist = await userRepository.exist({where:{id:categoryId}})

      if(!checkCategoryExist){
         throw new AppError('Category not found',404)
      }

      const categories:Category | null = await userRepository
         .createQueryBuilder('categories')
         .leftJoinAndSelect('categories.realEstate','realEstate')
         .where("categories.id = :id",{id:categoryId})
         .getOne()
   

      return categories!
   
   }


export default getCategoriesAndRealEstateServices