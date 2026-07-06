import type { Transaction } from "../types/transaction";

export type CreateTransactionInput = Omit<Transaction, "id">;
export type UpdateTransactionInput = Partial<CreateTransactionInput>;

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5001/api";

export async function getTransactions(): Promise<Transaction[]> {
  const response = await fetch(`${API_BASE_URL}/transactions`);

  if (!response.ok) {
    throw new Error("Failed to fetch transactions");
  }

  const data = await response.json();

  return data;
}

export async function createTransaction(data: CreateTransactionInput): Promise<Transaction> {
  const response = await fetch(`${API_BASE_URL}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create transaction");
  }

  return response.json();

}

export async function deleteTransactionApi(id: string): Promise<Transaction> {
  const response = await fetch(`${API_BASE_URL}/transactions/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete transaction");
  }

  return response.json();
}

export async function updateTransactionApi(id: string, data: UpdateTransactionInput): Promise<Transaction>{
  const response = await fetch(`${API_BASE_URL}/transactions/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update transaction");
  }

  return response.json();
}