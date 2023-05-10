import {string, z} from "zod"


const schedulesSchemas = z.object({
   id:z.string(),
   date:z.string(),
   hour:z.string(),
   realEstateId:z.number(),
})