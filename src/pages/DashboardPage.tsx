import SummaryCards from "../components/SummaryCards";

import type { CategoryStatistic } from "../types/statistics";
import MonthlySummary from "../components/MonthlySummary";
import type { CurrencyCode, ExchangeRates } from "../types/currency";
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
    rates: ExchangeRates;
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
    currency,
    rates
}: DashboardPageProps) {
    return (
        <div className="dashboard-page">
            <SummaryCards totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} currency={currency} rates={rates} />
            <MonthlySummary
                monthlyBalance={monthlyBalance}
                monthlyIncome={monthlyIncome} 
                monthlyExpenses={monthlyExpenses}
                onMonthChange={onMonthChange}
                selectedMonth={selectedMonth}
                monthlyExpenseCategoryStatistics={monthlyExpenseCategoryStatistics}
                monthlyIncomeCategoryStatistics={monthlyIncomeCategoryStatistics}
                currency={currency}
                rates={rates}
            />
            <CategoryBarChart statistics={expenseCategoryStatistics} title="Expenses by category" currency={currency} rates={rates} />
            <CategoryBarChart statistics={incomeCategoryStatistics} title="Income by category" currency={currency} rates={rates} />
        </div>
    )
}

export default DashboardPage;