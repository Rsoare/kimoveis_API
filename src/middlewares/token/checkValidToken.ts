import { NextFunction, Request, Response, response } from "express";
import { AppError } from "../../error/error";
import jwt from "jsonwebtoken";

const checkValidToken = async (
   req: Request,
   res: Response,
   next: NextFunction
): Promise<Response | void> => {

   let token: string | undefined = req.headers.authorization;

   if (!token) {
      throw new AppError("Missing bearer token", 401);
   }

   token = token.split(" ")[1];

   jwt.verify(token, process.env.SECRET_KEY!, 
   (err: any, decode: any) => {
      if (err) {
         throw new AppError(err.message, 401);
      }
      res.locals.admin = decode.admin;
      res.locals.sub = decode.sub;
   });

   return next();
};

export default checkValidToken;
