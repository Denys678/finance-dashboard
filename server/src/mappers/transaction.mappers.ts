import type { Transaction } from "../generated/prisma/client.js";

export type TransactionResponse = {
  id: string;
  title: string;
  amount: number;
  type: Transaction["type"];
  date: string;
  category: string;
  createdAt: string;
  updatedAt: string;
};

function formatDateOnly(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function formatDateTime(date: Date): string {
  return date.toISOString();
}

function decimalToNumber(value: Transaction["amount"]): number {
  return Number(value.toString());
}

export function mapTransaction(transaction: Transaction): TransactionResponse {
  return {
    id: transaction.id,
    title: transaction.title,
    amount: decimalToNumber(transaction.amount),
    type: transaction.type,
    date: formatDateOnly(transaction.date),
    category: transaction.category,
    createdAt: formatDateTime(transaction.createdAt),
    updatedAt: formatDateTime(transaction.updatedAt),
  };
}

export function mapTransactions(
  transactions: Transaction[]
): TransactionResponse[] {
  return transactions.map(mapTransaction);
}