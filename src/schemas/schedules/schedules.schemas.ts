import {z} from "zod"

const schedulesSchemas = z.object({
   id:z.string(),
   date:z.string(),
   hour:z.string(),
   realEstateId:z.number(),
   userId:z.number()
})

const schedulesRequest = schedulesSchemas.omit({id:true,userId:true})

export {schedulesRequest}