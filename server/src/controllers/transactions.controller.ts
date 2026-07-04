import { getAllTransactions } from "../services/transactions.service.js";
import type { Request, Response, NextFunction } from "express";  

export async function getTransactions(req: Request, res: Response, next: NextFunction) {
    try{
        const transactions = await getAllTransactions();

        return res.status(200).json(transactions);
    } catch(error){
        return next(error);
    }
}