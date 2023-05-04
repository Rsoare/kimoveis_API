import { Repository } from "typeorm";
import { TUserRequest, TUserResponse } from "../../interfaces/users/users.intefaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { hash } from "bcryptjs";
import { userSchemaResponse } from "../../schemas/users/users.schemas";


const postUsersServices = async (bodyData:TUserRequest)=> {

   const userRepository:Repository<User> = AppDataSource.getRepository(User)

   bodyData.password = await hash(bodyData.password,10)

   const user:User = userRepository.create(bodyData)
   await userRepository.save(user) 

   const userResponse:TUserResponse = userSchemaResponse.parse(user)

   return userResponse
}


export default postUsersServices