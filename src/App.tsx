import { useEffect, useState } from "react";
import type { Transaction } from "./types/transaction";

import TransactionList from "./components/TransactionList";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";

const STORAGE_KEY = "finance-dashboard-transactions";

const initialTransactions: Transaction[] = [
  {
      id: "1",
      title: "Salary",
      amount: 1200,
      type: "income",
      category: "Work",
      date: "2026-05-25"
    },
    {
      id: "2",
      title: "Food",
      amount: 250,
      type: "expense",
      category: "Groceries",
      date: "2026-05-25"
    },
    {
      id: "3",
      title: "Transport",
      amount: 80,
      type: "expense",
      category: "Transport",
      date: "2026-05-24"
    },
];

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const savedTransactions = localStorage.getItem(STORAGE_KEY);

    if (!savedTransactions) {
      return initialTransactions;
    }

    try {
      return JSON.parse(savedTransactions) as Transaction[]
    } catch {
      return initialTransactions;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions])

  const handleDeleteTransaction = (id: string): void => {
    setTransactions(prev => prev.filter(transaction => transaction.id !== id));
  }

  const handleAddTransaction = (transaction: Transaction): void => {
    setTransactions(prev => [transaction, ...prev]);
  }

  const totalIncome = transactions.filter(item => item.type === "income").reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = transactions.filter(item => item.type === "expense").reduce((acc, item) => acc + item.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <main>
      <h1>Finance Dashboard</h1>
      <SummaryCards totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />

      <TransactionForm onAddTransaction={handleAddTransaction}/>

      <TransactionList transactions={transactions} onDeleteTransaction={handleDeleteTransaction}/>
    </main>
  )
}

export default App
