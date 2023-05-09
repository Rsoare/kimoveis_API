import { ctgSchemaRequest } from "../../schemas/categories/categories.schemas";
import {z} from "zod"

type TCategoriesRequest = z.infer<typeof ctgSchemaRequest >

type TCategoriesAndEstateResponse = {
   id:number
   name:string
   realEstate:[],
   createdAt:string,
   updatedAt:string,
}

export {TCategoriesRequest,TCategoriesAndEstateResponse}