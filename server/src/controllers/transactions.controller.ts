import { CreateTransactionInput, TransactionIdParams } from "../schemas/transactions.schemas.js";
import { createTransactionRecord, getAllTransactions, getTransactionById } from "../services/transactions.service.js";
import type { Request, Response, NextFunction } from "express";  

export async function getTransactions(req: Request, res: Response, next: NextFunction) {
    try{
        const transactions = await getAllTransactions();

        return res.status(200).json(transactions);
    } catch(error){
        return next(error);
    }
}

export async function createTransaction(req: Request, res: Response, next: NextFunction) {
    try{
        const data = req.body as CreateTransactionInput;
        
        const transaction = await createTransactionRecord(data);

        return res.status(201).json(transaction);
    } catch(error) {
        return next(error);
    }
}

export async function getTransaction(req: Request, res: Response, next: NextFunction) {
    try{
        const { id } = req.params as TransactionIdParams;
        
        const transaction = await getTransactionById(id);

        return res.status(200).json(transaction);
    } catch(error){
        return next(error);
    }
}