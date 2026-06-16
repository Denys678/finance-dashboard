import SummaryCards from "../components/SummaryCards";
import CategoryStatistics from "../components/CategoryStatistics";

import type { CategoryStatistic } from "../types/statistics";
import MonthlySummary from "../components/MonthlySummary";

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
    monthlyBalance
}: DashboardPageProps) {
    return (
        <div className="dashboard-page">
            <SummaryCards totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />
            <MonthlySummary
                monthlyBalance={monthlyBalance}
                monthlyIncome={monthlyIncome} monthlyExpenses=
                {monthlyExpenses}
                onMonthChange={onMonthChange}
                selectedMonth={selectedMonth}
            />
            <CategoryStatistics statistics={expenseCategoryStatistics} title="Expenses by category"/>
            <CategoryStatistics statistics={incomeCategoryStatistics} title="Income by category" />
        </div>
    )
}

export default DashboardPage;