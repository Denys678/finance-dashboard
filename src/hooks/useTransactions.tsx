import { useEffect, useState, useMemo } from "react";
import type { Transaction } from "../types/transaction";
import getCategoryStatistics from "../utils/getCategoryStatistics";
import { createTransaction, deleteTransactionApi, getTransactions as fetchTransactions, updateTransactionApi, type CreateTransactionInput, type UpdateTransactionInput } from "../api/transactionsApi";

function useTransactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadTransactions() {
            try {
                setIsLoading(true);
                setError(null);

                const data = await fetchTransactions();

                setTransactions(data);
            } catch {
                setError("Failed to gecth transactions");
            } finally {
                setIsLoading(true);
            }
        }

        loadTransactions();
    }, []);

    const addTransaction = async (transactionData: CreateTransactionInput): Promise<Transaction> => {
        const createdTransaction = await createTransaction(transactionData);

        setTransactions((prev) => [createdTransaction, ...prev]);

        return createdTransaction;
    };

    const deleteTransaction = async (id: string): Promise<void> => {
        await deleteTransactionApi(id);

        setTransactions((prev) =>
            prev.filter((transaction) => transaction.id !== id)
        );
    };
    
    const updateTransaction = async (id: string, transactionData: UpdateTransactionInput): Promise<Transaction> => {
        const updatedTransaction = await updateTransactionApi(id, transactionData);

        setTransactions((prev) => prev.map((transaction => transaction.id === id ? updatedTransaction : transaction)));

        return updatedTransaction;
    };

    const totalIncome = useMemo(() => { return transactions.filter(item => item.type === "income").reduce((acc, item) => acc + item.amount, 0) }, [transactions]);
    const totalExpenses = useMemo(() => { return transactions.filter(item => item.type === "expense").reduce((acc, item) => acc + item.amount, 0) }, [transactions]);
    const balance = totalIncome - totalExpenses;

    const expenseCategoryStatistics = useMemo(() => getCategoryStatistics(transactions, 'expense'), [transactions]);
    const incomeCategoryStatistics = useMemo(() => getCategoryStatistics(transactions, 'income'), [transactions]);


    return {
        transactions,
        isLoading,
        error,
        addTransaction,
        deleteTransaction,
        updateTransaction,
        totalIncome,
        totalExpenses,
        balance,
        expenseCategoryStatistics,
        incomeCategoryStatistics,
    };
}

export default useTransactions;