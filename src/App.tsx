import { useEffect, useState, useMemo } from "react";

import type { Transaction } from "./types/transaction";
import type { TransactionFilterType } from "./types/filter";

import { Route, Routes } from "react-router";

import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";

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
      return JSON.parse(savedTransactions) as Transaction[];
    } catch {
      return initialTransactions;
    }
  });

  const [typeFilter, setTypeFilter] = useState<TransactionFilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  const handleDeleteTransaction = (id: string): void => {
    setTransactions(prev => prev.filter(transaction => transaction.id !== id));
  }

  const handleAddTransaction = (transaction: Transaction): void => {
    setTransactions(prev => [transaction, ...prev]);
  }

  const totalIncome  = useMemo(() => {return transactions.filter(item => item.type === "income").reduce((acc, item) => acc + item.amount, 0)}, [transactions]);
  const totalExpenses = useMemo(() => {return transactions.filter(item => item.type === "expense").reduce((acc, item) => acc + item.amount, 0)}, [transactions]);
  const balance = totalIncome - totalExpenses;

  const filteredTransactions = useMemo(() => {
    const lowerSearchQuery = searchQuery.toLowerCase().trim();
    
    return transactions.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(lowerSearchQuery) ||  item.category.toLowerCase().includes(lowerSearchQuery);
      const matchesType = typeFilter === "all" || item.type === typeFilter;

      return matchesSearch && matchesType;
    });    
  }, [transactions, searchQuery, typeFilter]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<DashboardPage totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />} />
        <Route path="transactions" element={<TransactionsPage searchQuery={searchQuery} 
                                                             typeFilter={typeFilter} 
                                                             transactions={filteredTransactions} 
                                                             onDeleteTransaction={handleDeleteTransaction} 
                                                             onAddTransaction={handleAddTransaction} 
                                                             onSearchChange={setSearchQuery}
                                                             onTypeFilterChange={setTypeFilter} 
            />
          } 
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
