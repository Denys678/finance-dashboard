import { useMemo, useState } from "react";

import { type TransactionSortType, type TransactionFilterType } from "../types/filter";
import type { Transaction } from "../types/transaction";

function useTransactionFilters (transactions: Transaction[]){
    const [typeFilter, setTypeFilter] = useState<TransactionFilterType>("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortType, setSortType] = useState<TransactionSortType>("newest");

    const filteredTransactions = useMemo(() => {
        const lowerSearchQuery = searchQuery.toLowerCase().trim();
    
        return transactions.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(lowerSearchQuery) ||  item.category.toLowerCase().includes(lowerSearchQuery);
            const matchesType = typeFilter === "all" || item.type === typeFilter;

        return matchesSearch && matchesType;
        });    
    }, [transactions, searchQuery, typeFilter]);

    const sortedTransactions = useMemo(() => {
        const transactionsCopy = [...filteredTransactions];

        switch(sortType) {
            case "newest":
                transactionsCopy.sort((a, b) => b.date.localeCompare(a.date));
                break;
            
            case "oldest":
                transactionsCopy.sort((a, b) => a.date.localeCompare(b.date));
                break;
            
            case "highest":
                transactionsCopy.sort((a, b) => b.amount-a.amount);
                break;
            
            case "lowest":
                transactionsCopy.sort((a, b) => a.amount - b.amount);
                break;
        }

        return transactionsCopy;
    }, [sortType, filteredTransactions]);

    const clearFilters = () => {
        setTypeFilter("all");
        setSearchQuery("");
        setSortType("newest");
    }

    return {
        searchQuery,
        typeFilter,
        sortedTransactions,
        sortType,
        setSearchQuery,
        setTypeFilter,
        setSortType,
        clearFilters,
    }

};

export default useTransactionFilters;