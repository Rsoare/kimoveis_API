import { Repository } from "typeorm";
import { TUserRequest, TUserResponse } from "../../interfaces/users/users.intefaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users/users.schemas";


const postUsersServices = async (bodyData:TUserRequest):Promise<TUserResponse> => {

   const userRepository:Repository<User> = AppDataSource.getRepository(User)

   const user:User = userRepository.create(bodyData)

   await userRepository.save(user) 

   const userResponse:TUserResponse = userSchemaResponse.parse(user)

   return userResponse
}


export default postUsersServices