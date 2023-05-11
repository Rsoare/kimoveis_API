import {z} from "zod"
import { schedulesRequest } from "../../schemas/schedules/schedules.schemas"


type TSchedulesRequest = z.infer<typeof schedulesRequest>

export {TSchedulesRequest}