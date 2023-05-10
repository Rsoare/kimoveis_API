import { z } from "zod";
import { estateAndAdressRequest } from "../../schemas/realEstate/realEstate.schemas";

type TEstateAndAdressRequest = z.infer<typeof estateAndAdressRequest>;

export { TEstateAndAdressRequest };
