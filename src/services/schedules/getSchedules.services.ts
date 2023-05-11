import { Repository } from "typeorm";
import { RealEstate, } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error/error";


const getSchedulesServices = async (
   realEstateId: number
): Promise<RealEstate> => {


   const realEstateRepository:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
   
   const realEstate:RealEstate | null = await realEstateRepository
      .createQueryBuilder('real_estate')
      .leftJoinAndSelect('real_estate.address','address')
      .leftJoinAndSelect('real_estate.category','category')
      .leftJoinAndSelect('real_estate.schedules','schedules')
      .leftJoinAndSelect('schedules.user','user')
      .addSelect("user.password")
      .where('real_estate.id = :id',{id:realEstateId})
      .getOne()

   if(!realEstate){
      throw new AppError("RealEstate not found",404)
   }
   return realEstate!
};

export default getSchedulesServices;
