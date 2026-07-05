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

export const updateTransactionInput = z.strictObject({
    title: z.string().trim().min(1).optional(),
    amount: z.number().positive().optional(),
    type: z.enum(["income", "expense"]).optional(),
    date: z.string().trim().min(1).regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    category: z.string().trim().min(1).optional(),
}).refine((data) => Object.keys(data).length > 0, {
    message: "At least one field is required",
});

export type CreateTransactionInput = z.infer<typeof createTransactionSchema>;
export type TransactionIdParams = z.infer<typeof transactionIdParamsSchema>
export type UpdateTransactionInput = z.infer<typeof updateTransactionInput>