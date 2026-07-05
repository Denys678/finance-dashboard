import express from "express";
import { createTransactionSchema, transactionIdParamsSchema } from "../schemas/transactions.schemas.js";
import { createTransaction, deleteTransaction, getTransaction, getTransactions } from "../controllers/transactions.controller.js";
import { validateRequest } from "../middleware/validateRequest.js";

const router = express.Router();

router.get("/", getTransactions);

router.post("/", validateRequest(createTransactionSchema, "body"), createTransaction);

router.get("/:id", validateRequest(transactionIdParamsSchema, "params"), getTransaction);

router.delete("/:id", validateRequest(transactionIdParamsSchema, "params"), deleteTransaction);

export default router;