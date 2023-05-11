import { DeepPartial, Repository } from "typeorm";
import {
   TUserResponse,
   updateRequest,
} from "../../interfaces/users/users.intefaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users/users.schemas";

const updateUsersServices = async (
   bodyData: updateRequest,
   userId: number
) => {

   const usersRepository:Repository<User> = AppDataSource.getRepository(User) 



   const userData:User | null = await AppDataSource
   .getRepository(User)
   .createQueryBuilder("users")
   .where('users.id = :userId',{userId})
   .addSelect("users.password")
   .getOne()

   const newUserData: User = usersRepository.create({
      ...userData,
      ...bodyData,
   })

   await usersRepository.save(newUserData)

   const returnUser:TUserResponse =  userSchemaResponse.parse(newUserData)

   return returnUser
};

export default updateUsersServices;
