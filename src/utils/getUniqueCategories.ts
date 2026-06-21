import type { Transaction } from "../types/transaction";

function getUniqueCategories(transactions: Transaction[]): string[] {
    const categories = transactions.map(transaction => transaction.category);

    const uniqueCategories = Array.from(new Set(categories));

    return uniqueCategories.sort();
}

export default getUniqueCategories;