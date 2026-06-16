import { useState, useMemo } from "react";
import type { Transaction } from "../types/transaction";
import getTransactionSummary from "../utils/getTransactionSummary";

function useMonthlyStatistics(transactions: Transaction[]) {
    const [selectedMonth, setSelectedMonth] = useState(() => {
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        return `${year}-${month}`;
    });

    const monthlyTransactions = useMemo(() => {
        if (!selectedMonth) {
            return [];
        }
        return transactions.filter((transaction => transaction.date.startsWith(selectedMonth)));
    }, [transactions, selectedMonth])

    const { totalIncome: monthlyIncome, totalExpenses: monthlyExpenses, balance: monthlyBalance, } = useMemo(
        () => getTransactionSummary(monthlyTransactions),
        [monthlyTransactions]
    );

    return {
        selectedMonth,
        setSelectedMonth,
        monthlyTransactions,
        monthlyExpenses,
        monthlyIncome,
        monthlyBalance,
    };
}

export default useMonthlyStatistics;