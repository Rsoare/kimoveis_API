import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"


const getRealEstateServices = async ():Promise<RealEstate[]> => {

   const userRepository:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
   
   const users:RealEstate[] | null = await userRepository
      .createQueryBuilder('real_estate')
      .leftJoinAndSelect('real_estate.address','address')
      .select()
      .getMany()

   return users
   
}


export default getRealEstateServices