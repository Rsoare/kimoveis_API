import { z } from "zod";
import {
   address,
   addressSchemas,
   estateAndAddressResponse,
   estateAndAdressRequest,
   realEstateRequest,
   realEstateSchemas,
} from "../../schemas/realEstate/realEstate.schemas";


type TRealEstate = z.infer<typeof realEstateSchemas>;

type TRealEstateRequest = z.infer<typeof realEstateRequest>;

type Taddress = z.infer<typeof addressSchemas>;

type TaddressRequest = z.infer<typeof address>;

type TEstateAndAdressRequest = z.infer<typeof estateAndAdressRequest>;

type TEstateAndAddressResponse = z.infer<typeof estateAndAddressResponse>


export { 
   TRealEstate, 
   TRealEstateRequest, 
   Taddress, 
   TaddressRequest,
   TEstateAndAdressRequest };
