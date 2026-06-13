import type { Transaction, TransactionType } from "../types/transaction";
import type { TransactionFilterType, TransactionSortType } from "../types/filter";

import TransactionForm from "../components/TransactionForm";
import TransactionFilters from "../components/TransactionFilters";
import TransactionList from "../components/TransactionList";

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
    onSortFilterChange
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
            />

            <TransactionList transactions={transactions} onDeleteTransaction={onDeleteTransaction} />
        </>
    )

}

export default TransactionsPage;