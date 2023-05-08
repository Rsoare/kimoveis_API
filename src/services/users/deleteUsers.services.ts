import { AppDataSource } from "../../data-source";
import { User } from "../../entities";


const deleteUsersServices = async (userId:number):Promise<void> => {

   await AppDataSource.getRepository(User)
   .createQueryBuilder('users')
   .softDelete()
   .where("users.id = :id", {id:userId})
   .execute()

}

export default deleteUsersServices