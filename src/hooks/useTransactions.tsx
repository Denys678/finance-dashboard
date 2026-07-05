import { useEffect, useState, useMemo } from "react";
import type { Transaction } from "../types/transaction";
import getCategoryStatistics from "../utils/getCategoryStatistics";
import { createTransaction, getTransactions as fetchTransactions, type CreateTransactionInput } from "../api/transactionsApi";

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

    const deleteTransaction = (id: string): void => {
        setTransactions((prev) =>
            prev.filter((transaction) => transaction.id !== id)
        );
    };

    const updateTransaction = (updatedTransaction: Transaction): void => {
        setTransactions(prev => {
            return prev.map(item => {
                return item.id === updatedTransaction.id ? updatedTransaction : item;
            })
        })
    }

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