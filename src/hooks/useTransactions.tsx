import { useEffect, useState, useMemo } from "react";
import type { Transaction } from "../types/transaction";

const STORAGE_KEY = "finance-dashboard-transactions";

const initialTransactions: Transaction[] = [
  {
    id: "1",
    title: "Salary",
    amount: 1200,
    type: "income",
    category: "Work",
    date: "2026-05-25",
  },
  {
    id: "2",
    title: "Food",
    amount: 250,
    type: "expense",
    category: "Groceries",
    date: "2026-05-25",
  },
  {
    id: "3",
    title: "Transport",
    amount: 80,
    type: "expense",
    category: "Transport",
    date: "2026-05-24",
  },
];

function useTransactions() {
    const [transactions, setTransactions] = useState<Transaction[]>(() => {
        const savedTransactions = localStorage.getItem(STORAGE_KEY);

        if (!savedTransactions) {
            return initialTransactions;
        }

        try {
            return JSON.parse(savedTransactions) as Transaction[];
        } catch {
            return initialTransactions;
        }
    });

    useEffect(() => {localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));}, [transactions]);

    const addTransaction = (transaction: Transaction): void => {setTransactions((prev) => [transaction, ...prev]);};

    const deleteTransaction = (id: string): void => {
        setTransactions((prev) =>
        prev.filter((transaction) => transaction.id !== id)
        );
    };

    const updateTransaction = ( updatedTransaction: Transaction): void => {
        setTransactions(prev => {
            return prev.map(item => {
                return item.id === updatedTransaction.id ? updatedTransaction : item;
            })
        })
    }

    const totalIncome  = useMemo(() => {return transactions.filter(item => item.type === "income").reduce((acc, item) => acc + item.amount, 0)}, [transactions]);
    const totalExpenses = useMemo(() => {return transactions.filter(item => item.type === "expense").reduce((acc, item) => acc + item.amount, 0)}, [transactions]);
    const balance = totalIncome - totalExpenses;
    

    return {
        transactions,
        addTransaction,
        deleteTransaction,
        updateTransaction,
        totalIncome,
        totalExpenses,
        balance
    };
}

export default useTransactions;