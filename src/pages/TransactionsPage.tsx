import type { Transaction } from "../types/transaction";
import type { TransactionFilterType, TransactionSortType } from "../types/filter";
import type { CurrencyCode, ExchangeRates } from "../types/currency";

import TransactionForm from "../components/TransactionForm";
import TransactionFilters from "../components/TransactionFilters";
import TransactionList from "../components/TransactionList";
import type { CreateTransactionInput } from "../api/transactionsApi";

type TransactionsPageProps = {
  transactions: Transaction[];
  onAddTransaction: (transaction: CreateTransactionInput) => Promise<Transaction>;
  onDeleteTransaction: (id: string) => Promise<void>;
  searchQuery: string;
  typeFilter: TransactionFilterType;
  typeSort: TransactionSortType;
  onSearchChange: (searchQuery: string) => void;
  onTypeFilterChange: (typeFilter: TransactionFilterType) => void;
  onSortFilterChange: (typeSort: TransactionSortType) => void;
  onClearFilters: () => void;
  currency: CurrencyCode;
  rates: ExchangeRates;
  categoryOptions: string[];
};

function TransactionsPage({
    transactions, 
    onAddTransaction, 
    onDeleteTransaction, 
    searchQuery, 
    typeFilter,
    typeSort, 
    onSearchChange, 
    onTypeFilterChange,
    onSortFilterChange,
    onClearFilters,
    currency,
    rates,
    categoryOptions
}: TransactionsPageProps) 
{
    return (
        <>
            <TransactionForm onAddTransaction={onAddTransaction} categoryOptions={categoryOptions} />

            <TransactionFilters 
                searchQuery={searchQuery} 
                typeFilter={typeFilter} 
                onSearchChange={onSearchChange} 
                onTypeFilterChange={onTypeFilterChange}
                onSortFilterChange={onSortFilterChange}
                typeSort={typeSort}
                clearFilters={onClearFilters} 
            />

            <TransactionList transactions={transactions} onDeleteTransaction={onDeleteTransaction} currency={currency} rates={rates}/>
        </>
    )

}

export default TransactionsPage;