import prisma from "../db/prisma.js";
import { AppError } from "../errors/AppError.js";
import { CreateTransactionInput, UpdateTransactionInput } from "../schemas/transactions.schemas.js";

export async function getAllTransactions() {
    const transactions = await prisma.transaction.findMany({
        orderBy: {
            date: "desc",
        }
    });

    return transactions;
}

export async function createTransactionRecord(data: CreateTransactionInput) {
    const transaction = await prisma.transaction.create({
        data: {
            title: data.title,
            amount: data.amount,
            type: data.type,
            date: new Date(data.date),
            category: data.category,
        },
    })

    return transaction;
}

export async function getTransactionById(id: string) {
    const transaction = await prisma.transaction.findUnique({
        where: {
            id,
        },
    });

    if (transaction === null) {
        throw new AppError({
            message: "Transaction not found",
            statusCode: 404,
        });
    }

    return transaction;
}

export async function deleteTransactionById(id: string) {
    await getTransactionById(id)

    return prisma.transaction.delete({
        where: {
            id,
        },
    });
}

export async function updateTransactionById(id: string, data: UpdateTransactionInput) {
    await getTransactionById(id);

    return prisma.transaction.update({
        where: {
            id,
        },
        data: {
            ...data,
            date: data.date ? new Date(data.date) : undefined,
        },
    });
}