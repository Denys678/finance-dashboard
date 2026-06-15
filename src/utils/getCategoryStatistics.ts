import type { Transaction, TransactionType } from "../types/transaction";
import type { CategoryStatistic } from "../types/statistics";

function getCategoryStatistics(transactions: Transaction[], transactionType: TransactionType): CategoryStatistic[] {
    return transactions
        .filter(transaction => transaction.type === transactionType)
        .reduce<CategoryStatistic[]>((acc, transaction) => {
            const existingCategory = acc.find(item => item.category === transaction.category);

            if (existingCategory) {
                existingCategory.total += transaction.amount;
            } else {
                acc.push({
                    category: transaction.category,
                    total: transaction.amount,
                });
            }

            return acc;
        }, []);
}

export default getCategoryStatistics;