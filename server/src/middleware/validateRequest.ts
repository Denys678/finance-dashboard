import type { ZodType } from "zod";
import { AppError } from "../errors/AppError.js";
import type { Request, Response, NextFunction } from "express";

export function validateRequest(schema: ZodType, target: "body" | "params"){
    return function(req: Request, _res: Response, next: NextFunction){
        const result = schema.safeParse(req[target]);

        if(!result.success){
            return next(new AppError({ message: `Invalid ${target}`, statusCode: 400 }));
        }

        req[target] = result.data;
        next();
    }
}