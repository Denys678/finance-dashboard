import SummaryCards from "../components/SummaryCards";

import type { CategoryStatistic } from "../types/statistics";
import MonthlySummary from "../components/MonthlySummary";
import type { CurrencyCode } from "../types/currency";
import CategoryBarChart from "../components/CategoryBarChart";

type DashboardPageProps = {
    totalIncome: number;
    totalExpenses: number;
    balance: number;
    expenseCategoryStatistics: CategoryStatistic[];
    incomeCategoryStatistics: CategoryStatistic[];
    selectedMonth: string;
    onMonthChange: (month: string) => void;
    monthlyIncome: number;
    monthlyExpenses: number;
    monthlyBalance: number;
    monthlyIncomeCategoryStatistics: CategoryStatistic[];
    monthlyExpenseCategoryStatistics: CategoryStatistic[];
    currency: CurrencyCode;
}

function DashboardPage({
    totalIncome,
    totalExpenses,
    balance,
    expenseCategoryStatistics,
    incomeCategoryStatistics,
    selectedMonth,
    onMonthChange,
    monthlyIncome,
    monthlyExpenses,
    monthlyBalance,
    monthlyIncomeCategoryStatistics,
    monthlyExpenseCategoryStatistics,
    currency
}: DashboardPageProps) {
    return (
        <div className="dashboard-page">
            <SummaryCards totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} currency={currency} />
            <MonthlySummary
                monthlyBalance={monthlyBalance}
                monthlyIncome={monthlyIncome} 
                monthlyExpenses={monthlyExpenses}
                onMonthChange={onMonthChange}
                selectedMonth={selectedMonth}
                monthlyExpenseCategoryStatistics={monthlyExpenseCategoryStatistics}
                monthlyIncomeCategoryStatistics={monthlyIncomeCategoryStatistics}
                currency={currency}
            />
            <CategoryBarChart statistics={expenseCategoryStatistics} title="Expenses by category" currency={currency} />
            <CategoryBarChart statistics={incomeCategoryStatistics} title="Income by category" currency={currency} />
        </div>
    )
}

export default DashboardPage;