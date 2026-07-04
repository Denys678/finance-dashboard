import prisma from "../db/prisma.js";

export async function getAllTransactions() {
    const transactions = await prisma.transaction.findMany({
        orderBy: {
            date: "desc",
        }
    });

    return transactions;
}