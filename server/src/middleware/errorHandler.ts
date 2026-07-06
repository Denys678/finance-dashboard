import { AppError } from "../errors/AppError.js";
import type { Request, Response, NextFunction } from "express";  

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message,
        });
    } 

    return res.status(500).json({
        status: 500,
        message: "Internal server error",
    })
}