import { z } from "zod";

export const createTransactionSchema = z.strictObject({
    title: z.string().trim().min(1),
    amount: z.number().positive(),
    type: z.enum(["income", "expense"]),
    date: z.string().trim().min(1).regex(/^\d{4}-\d{2}-\d{2}$/),
    category: z.string().trim().min(1),
});

export const transactionIdParamsSchema = z.strictObject({
    id: z.string().uuid(),
});

export type CreateTransactionInput = z.infer<typeof createTransactionSchema>;
export type TransactionIdParams = z.infer<typeof transactionIdParamsSchema>