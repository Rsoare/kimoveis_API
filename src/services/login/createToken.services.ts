import { Repository } from "typeorm"
import { TLoginRequest, Ttoken } from "../../interfaces/login/login.interfaces"
import { User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../error/error"
import { compare } from "bcryptjs"
import jwt from 'jsonwebtoken'


const createToken = async (bodyData:TLoginRequest):Promise<Ttoken> =>{

   const email:string = bodyData.email

   const userRepository:Repository<User> = AppDataSource.getRepository(User)

   const user:User | null = await userRepository.findOne({where:{email:email}})

   
   if (!user) {
      throw new AppError('Invalid credentials', 401)
   }
   
   const passwordCompare = await compare(bodyData.password, user.password)

   if(!passwordCompare){
      throw new AppError('Invalid credentials', 401)
   }


   const token = jwt.sign(
      {
         userAdmin:user.admin
      },
      process.env.SECRET_KEY!,
      {
         expiresIn:'24h',
         subject:String(user.id)
      }
   )

   return {
      token:token
   }
}

export default createToken