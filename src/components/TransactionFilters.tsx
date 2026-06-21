import type { TransactionFilterType, TransactionSortType } from "../types/filter";

type TransactionFiltersProps = {
    searchQuery: string;
    typeFilter: TransactionFilterType;
    typeSort: TransactionSortType;
    onSearchChange: (searchQuery: string) => void;
    onTypeFilterChange: (typeFilter: TransactionFilterType) => void;
    onSortFilterChange: (typeSort: TransactionSortType) => void;
    clearFilters: () => void;
};

function TransactionFilters({
    searchQuery,
    typeFilter,
    typeSort,
    onSearchChange,
    onTypeFilterChange,
    onSortFilterChange,
    clearFilters
}: TransactionFiltersProps) {
    return (
        <section className="transaction-filters">
            <h2>Filters</h2>

            <div className="transaction-filters__controls">
                <input
                    className="transaction-filters__search"
                    placeholder="Search by title or category"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                />

                <select
                    value={typeFilter}
                    onChange={(e) => onTypeFilterChange(e.target.value as TransactionFilterType)}
                >
                    <option value="all">All</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                <select
                    value={typeSort}
                    onChange={(e) => onSortFilterChange(e.target.value as TransactionSortType)}
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="highest">Highest</option>
                    <option value="lowest">Lowest</option>
                </select>

                <button className="button-secondary" type="button" onClick={clearFilters}>
                    Clear filters
                </button>
            </div>
        </section>
    );
}

export default TransactionFilters;