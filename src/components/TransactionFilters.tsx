import type { TransactionFilterType } from "../types/filter";

type TransactionFiltersProps = {
    searchQuery: string;
    typeFilter: TransactionFilterType;
    onSearchChange: (searchQuery: string) => void;
    onTypeFilterChange: (typeFilter: TransactionFilterType) => void;
}

function TransactionFilters({
    searchQuery, 
    typeFilter, 
    onSearchChange, 
    onTypeFilterChange
}:TransactionFiltersProps)
{
    return (
        <section>
            <h2>Filters</h2>
            <input placeholder="Search by title or category" value={searchQuery} onChange={(e) => onSearchChange(e.target.value)}></input>
            <select value={typeFilter} onChange={(e) => onTypeFilterChange(e.target.value as TransactionFilterType)}>
                <option value="all">All</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
        </section>
    )
}

export default TransactionFilters;