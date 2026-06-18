import type { Transaction} from "../types/transaction";
import type { TransactionFilterType, TransactionSortType } from "../types/filter";

import TransactionForm from "../components/TransactionForm";
import TransactionFilters from "../components/TransactionFilters";
import TransactionList from "../components/TransactionList";
import type { CurrencyCode } from "../types/currency";

type TransactionsPageProps = {
  transactions: Transaction[];
  onAddTransaction: (transaction: Transaction) => void;
  onDeleteTransaction: (id: string) => void;
  searchQuery: string;
  typeFilter: TransactionFilterType;
  typeSort: TransactionSortType;
  onSearchChange: (searchQuery: string) => void;
  onTypeFilterChange: (typeFilter: TransactionFilterType) => void;
  onSortFilterChange: (typeSort: TransactionSortType) => void;
  onClearFilters: () => void;
  currency: CurrencyCode;
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
    currency
}: TransactionsPageProps) 
{
    return (
        <>
            <TransactionForm onAddTransaction={onAddTransaction} />

            <TransactionFilters 
                searchQuery={searchQuery} 
                typeFilter={typeFilter} 
                onSearchChange={onSearchChange} 
                onTypeFilterChange={onTypeFilterChange}
                onSortFilterChange={onSortFilterChange}
                typeSort={typeSort}
                clearFilters={onClearFilters} 
            />

            <TransactionList transactions={transactions} onDeleteTransaction={onDeleteTransaction} currency={currency}/>
        </>
    )

}

export default TransactionsPage;