import { Repository } from "typeorm";
import { RealEstate, Schedule, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error/error";
import { TSchedulesRequest } from "../../interfaces/schedules/schedules.interfaces";

const postSchedulesServices = async (
   bodyData: TSchedulesRequest,
   userId: number
): Promise<object> => {
   const realEstateId: number = bodyData.realEstateId;

   const realEstateRepository: Repository<RealEstate> =
      AppDataSource.getRepository(RealEstate);

   const userRepository: Repository<User> = AppDataSource.getRepository(User);

   const schedulesRepository: Repository<Schedule> =
      AppDataSource.getRepository(Schedule);

   const realEstate: RealEstate | null = await realEstateRepository.findOne({
      where: { id: realEstateId },
   });

   if (!realEstate) {
      throw new AppError("RealEstate not found", 404);
   }

   const user: User | null = await userRepository.findOne({
      where: { id: userId },
   });

   if (!user) {
      throw new AppError("User not found", 404);
   }

   const schedules: Schedule = schedulesRepository.create({
      ...bodyData,
      user: user!,
      realEstate: realEstate!,
   });

   await schedulesRepository.save(schedules);

   return { message: "Schedule created" };
};

export default postSchedulesServices;
