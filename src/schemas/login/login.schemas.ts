import { z } from "zod";

const loginSchemas = z.object({
   email: z.string().email().max(45),
   password: z.string().max(120),
});

export { loginSchemas };
