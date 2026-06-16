import { Route, Routes } from "react-router";

import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
import TransactionDetailsPage from "./pages/TransactionDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
import TransactionEditPage from "./pages/TransactionEditPage";

import useTransactions from "./hooks/useTransactions";
import useTransactionFilters from "./hooks/useTransactionFilters";
import useMonthlyStatistics from "./hooks/useMonthlyStatistics";

function App() {
  const {transactions, addTransaction, deleteTransaction, updateTransaction, totalIncome, totalExpenses, balance, expenseCategoryStatistics, incomeCategoryStatistics} = useTransactions();
  const {searchQuery, typeFilter, sortedTransactions, sortType, setSearchQuery, setTypeFilter, setSortType} = useTransactionFilters(transactions);
  const {selectedMonth, setSelectedMonth, monthlyIncome, monthlyBalance, monthlyExpenses} = useMonthlyStatistics(transactions);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route 
          index element={<DashboardPage 
            totalIncome={totalIncome} 
            totalExpenses={totalExpenses} 
            balance={balance} 
            expenseCategoryStatistics={expenseCategoryStatistics}
            incomeCategoryStatistics={incomeCategoryStatistics}
            selectedMonth={selectedMonth}
            onMonthChange={setSelectedMonth}
            monthlyIncome={monthlyIncome}
            monthlyBalance={monthlyBalance}
            monthlyExpenses={monthlyExpenses}
            />
          } 
        />
        <Route 
          path="transactions" 
          element={<TransactionsPage 
            searchQuery={searchQuery} 
            typeFilter={typeFilter}
            typeSort={sortType} 
            transactions={sortedTransactions} 
            onDeleteTransaction={deleteTransaction} 
            onAddTransaction={addTransaction} 
            onSearchChange={setSearchQuery}
            onTypeFilterChange={setTypeFilter}
            onSortFilterChange={setSortType} 
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
