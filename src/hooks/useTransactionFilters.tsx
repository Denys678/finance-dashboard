import { useMemo, useState } from "react";

import type { TransactionFilterType } from "../types/filter";
import type { Transaction } from "../types/transaction";

function useTransactionFilters (transactions: Transaction[]){
    const [typeFilter, setTypeFilter] = useState<TransactionFilterType>("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTransactions = useMemo(() => {
        const lowerSearchQuery = searchQuery.toLowerCase().trim();
    
        return transactions.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(lowerSearchQuery) ||  item.category.toLowerCase().includes(lowerSearchQuery);
            const matchesType = typeFilter === "all" || item.type === typeFilter;

        return matchesSearch && matchesType;
        });    
    }, [transactions, searchQuery, typeFilter]);

    return {
        searchQuery,
        typeFilter,
        filteredTransactions,
        setSearchQuery,
        setTypeFilter
    }

};

export default useTransactionFilters;