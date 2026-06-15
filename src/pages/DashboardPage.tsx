import SummaryCards from "../components/SummaryCards";
import CategoryStatistics from "../components/CategoryStatistics";

import type { CategoryStatistic } from "../types/statistics";

type DashboardPageProps = {
    totalIncome: number;
    totalExpenses: number;
    balance: number;
    expenseCategoryStatistics: CategoryStatistic[];
    incomeCategoryStatistics: CategoryStatistic[];
}

function DashboardPage({ totalIncome, totalExpenses, balance, expenseCategoryStatistics, incomeCategoryStatistics } : DashboardPageProps) {
    return (
        <div className="dashboard-page">
            <SummaryCards totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />
            <CategoryStatistics statistics={expenseCategoryStatistics} title="Expenses by category"/>
            <CategoryStatistics statistics={incomeCategoryStatistics} title="Income by category" />
        </div>
    )
}

export default DashboardPage;