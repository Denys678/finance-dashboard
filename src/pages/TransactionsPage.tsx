import type { Transaction } from "../types/transaction";
import type { TransactionFilterType } from "../types/filter";

import TransactionForm from "../components/TransactionForm";
import TransactionFilters from "../components/TransactionFilters";
import TransactionList from "../components/TransactionList";

type TransactionsPageProps = {
  transactions: Transaction[];
  onAddTransaction: (transaction: Transaction) => void;
  onDeleteTransaction: (id: string) => void;
  searchQuery: string;
  typeFilter: TransactionFilterType;
  onSearchChange: (searchQuery: string) => void;
  onTypeFilterChange: (typeFilter: TransactionFilterType) => void;
};

function TransactionsPage({
    transactions, 
    onAddTransaction, 
    onDeleteTransaction, 
    searchQuery, 
    typeFilter, 
    onSearchChange, 
    onTypeFilterChange
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
            />

            <TransactionList transactions={transactions} onDeleteTransaction={onDeleteTransaction} />
        </>
    )

}

export default TransactionsPage;