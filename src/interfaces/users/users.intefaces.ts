import { z } from "zod";

import {
   userSchemaRequest,
   userSchemaResponse,
} from "../../schemas/users/users.schemas";
import { DeepPartial } from "typeorm";

type TUserRequest = z.infer<typeof userSchemaRequest>;

type TUserResponse = z.infer<typeof userSchemaResponse>;

type updateRequest = DeepPartial<TUserRequest>;

export { TUserRequest, TUserResponse, updateRequest };
