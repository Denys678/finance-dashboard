import { Route, Routes } from "react-router";

import getUniqueCategories from "./utils/getUniqueCategories";

import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
import TransactionDetailsPage from "./pages/TransactionDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
import TransactionEditPage from "./pages/TransactionEditPage";

import useTransactions from "./hooks/useTransactions";
import useTransactionFilters from "./hooks/useTransactionFilters";
import useMonthlyStatistics from "./hooks/useMonthlyStatistics";
import useCurrency from "./hooks/useCurrency";
import useExchangeRates from "./hooks/useExchangeRates";

function App() {
  const { transactions, addTransaction, deleteTransaction, updateTransaction, totalIncome, totalExpenses, balance, expenseCategoryStatistics, incomeCategoryStatistics } = useTransactions();
  const { searchQuery, typeFilter, sortedTransactions, sortType, setSearchQuery, setTypeFilter, setSortType, clearFilters } = useTransactionFilters(transactions);
  const { selectedMonth, setSelectedMonth, monthlyIncome, monthlyBalance, monthlyExpenses, monthlyExpenseCategoryStatistics, monthlyIncomeCategoryStatistics } = useMonthlyStatistics(transactions);
  const { currency, setCurrency } = useCurrency();
  const { rates, isLoading, error } = useExchangeRates();

  const categoryOptions = getUniqueCategories(transactions);

  return (
    <Routes>
      <Route element={<MainLayout
        currency={currency}
        onCurrencyChange={setCurrency}
        isExchangeRatesLoading={isLoading}
        exchangeRatesError={error}
      />
      }>
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
            monthlyExpenseCategoryStatistics={monthlyExpenseCategoryStatistics}
            monthlyIncomeCategoryStatistics={monthlyIncomeCategoryStatistics}
            currency={currency}
            rates={rates}
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
            onClearFilters={clearFilters}
            currency={currency}
            rates={rates}
            categoryOptions={categoryOptions}
          />
          }
        />
        <Route path="transactions/:id/edit" element={<TransactionEditPage 
        transactions={transactions} 
        onUpdateTransaction={updateTransaction} 
          categoryOptions={categoryOptions}
        />
      }
         />
        <Route path="transactions/:id" element={<TransactionDetailsPage transactions={transactions} currency={currency} rates={rates} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
