import { ctgSchemaRequest } from "../../schemas/categories/categories.schemas";
import { z } from "zod";

type TCategoriesRequest = z.infer<typeof ctgSchemaRequest>;

export { TCategoriesRequest };
