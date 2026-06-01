import { Route, Routes } from "react-router";

import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
import TransactionDetailsPage from "./pages/TransactionDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";

import useTransactions from "./hooks/useTransactions";
import useTransactionFilters from "./hooks/useTransactionFilters";
import TransactionEditPage from "./pages/TransactionEditPage";

function App() {
  const {transactions, addTransaction, deleteTransaction, updateTransaction, totalIncome, totalExpenses, balance} = useTransactions();
  const {searchQuery, typeFilter, filteredTransactions, setSearchQuery, setTypeFilter} = useTransactionFilters(transactions);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<DashboardPage totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />} />
        <Route 
          path="transactions" 
          element={<TransactionsPage 
            searchQuery={searchQuery} 
            typeFilter={typeFilter} 
            transactions={filteredTransactions} 
            onDeleteTransaction={deleteTransaction} 
            onAddTransaction={addTransaction} 
            onSearchChange={setSearchQuery}
            onTypeFilterChange={setTypeFilter} 
            />
          } 
        />
        <Route path="transactions/:id/edit" element={<TransactionEditPage transactions={transactions} onUpdateTransaction={updateTransaction} />} />
        <Route path="transactions/:id" element={<TransactionDetailsPage transactions={transactions} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
