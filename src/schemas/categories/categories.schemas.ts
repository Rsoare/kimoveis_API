import {z} from "zod"

const categorieSchemas = z.object({
   id:z.number(),
   name:z.string().max(45)
})

const ctgSchemaRequest = categorieSchemas.omit({id:true})

export {ctgSchemaRequest} 