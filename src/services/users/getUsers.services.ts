import { Repository } from "typeorm"
import { TUserResponse } from "../../interfaces/users/users.intefaces"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"


const getUsersServices = async ():Promise<User[]> => {

   const userRepository:Repository<User> = AppDataSource.getRepository(User)
   
   const users:User[] = await userRepository
      .createQueryBuilder('users')
      .select()
      .getMany()


   return users
   
}


export default getUsersServices