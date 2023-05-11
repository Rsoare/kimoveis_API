import { NextFunction, Response, Request } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address } from "../../entities";
import { AppError } from "../../error/error";
import { TEstateAndAdressRequest } from "../../interfaces/realEstate/realEstate.interfaces";

const checkDuplicateAddress = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<Response | void> => {
   const bodyData: TEstateAndAdressRequest = req.body;

   const street: string = bodyData.address.street;
   const zipCode: string = bodyData.address.zipCode;
   const city: string = bodyData.address.city;
   const state: string = bodyData.address.state;
   const number: string | undefined = bodyData.address.number;

   const userRepository: Repository<Address> =
      AppDataSource.getRepository(Address);

   const checkDuplicate: Address | null = await userRepository.findOne({
      where: {
         street: street,
         zipCode: zipCode,
         city: city,
         state: state,
         number: number!,
      },
   });

   if (checkDuplicate) {
      throw new AppError("Address already exists", 409);
   }

   return next();
};

export default checkDuplicateAddress;
