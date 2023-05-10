import { Repository } from "typeorm";
import { Address, Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TEstateAndAdressRequest } from "../../interfaces/realEstate/realEstate.interfaces";
import { AppError } from "../../error/error";

const realEstateServices = async (
   dataBody: TEstateAndAdressRequest
): Promise<RealEstate> => {

   const categoryRepository: Repository<Category> =
      AppDataSource.getRepository(Category);

   const realEstateRepository: Repository<RealEstate> =
      AppDataSource.getRepository(RealEstate);

   const addressRepository: Repository<Address> =
      AppDataSource.getRepository(Address);

   const category: Category | null = await categoryRepository.findOne({
      where: { id: dataBody.categoryId },
   });

   if (!category) {
      throw new AppError("Category not found", 404);
   }

   const address: Address = addressRepository.create(dataBody.address);
   await addressRepository.save(address);

   
   const estate: RealEstate = realEstateRepository.create({
      ...dataBody,
      address: address,
      category: category,
   });

   await realEstateRepository.save(estate);

   return estate;
};

export default realEstateServices;
