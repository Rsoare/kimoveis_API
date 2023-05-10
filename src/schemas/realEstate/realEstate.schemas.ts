import { z } from "zod";

const realEstateSchemas = z.object({
   id: z.number(),
   value: z.number().or(z.string()).default(0),
   size: z.number().min(0,'Number must be greater than 0'),
   categoryId: z.number(),
   sold: z.boolean().default(false),
   createdAt: z.string(),
   updatedAt: z.string(),
});

const addressSchemas = z.object({
   id: z.number(),
   street: z.string().max(45),
   zipCode: z.string().max(8),
   number: z.string().max(7).optional(),
   city: z.string().max(20),
   state: z.string().max(2),
});

const realEstateRequest = realEstateSchemas.omit({ 
   id: true, 
   sold: true,
   createdAt:true,
   updatedAt:true });

const address = addressSchemas.omit({ id: true });

const estateAndAdressRequest = realEstateRequest.extend({address})

const estateAndAddressResponse = z.object({
   id: z.number(),
   value: z.number().or(z.string()).default(0),
   size: z.number().min(0,'Number must be greater than 0'),
   category: z.object({
      id:z.number(),
      name:z.string()
   }),
   sold: z.boolean().default(false),
   createdAt: z.string(),
   updatedAt: z.string(),
   address:z.object({
      id: z.number(),
      street: z.string().max(45),
      zipCode: z.string().max(8),
      number: z.string().max(7).optional(),
      city: z.string().max(20),
      state: z.string().max(2),
   })
})



export { 
   realEstateRequest, 
   realEstateSchemas, 
   address, 
   addressSchemas,
   estateAndAdressRequest,
   estateAndAddressResponse };
