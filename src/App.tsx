import { useState } from "react";
import type { Transaction } from "./types/transaction";

import TransactionList from "./components/TransactionList";
import SummaryCards from "./components/SummaryCards";

function App() {
  const [transactions] = useState<Transaction[]>([
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
  ]);

  const totalIncome = transactions.filter(item => item.type === "income").reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = transactions.filter(item => item.type === "expense").reduce((acc, item) => acc + item.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <main>
      <h1>Finance Dashboard</h1>
      <SummaryCards totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />

      <TransactionList transactions={transactions} />
    </main>
  )
}

export default App
