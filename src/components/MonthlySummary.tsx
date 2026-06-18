import SummaryCards from "./SummaryCards";
import type { CategoryStatistic } from "../types/statistics";
import type { CurrencyCode } from "../types/currency";
import CategoryBarChart from "./CategoryBarChart";

type MonthlySummaryProps = {
    selectedMonth: string;
    onMonthChange: (month: string) => void;
    monthlyIncome: number;
    monthlyExpenses: number;
    monthlyBalance: number;
    monthlyExpenseCategoryStatistics: CategoryStatistic[];
    monthlyIncomeCategoryStatistics: CategoryStatistic[];
    currency: CurrencyCode;
}

function MonthlySummary({
        selectedMonth,
        onMonthChange,
        monthlyIncome,
        monthlyExpenses,
        monthlyBalance,
        monthlyExpenseCategoryStatistics,
        monthlyIncomeCategoryStatistics,
        currency
    }: MonthlySummaryProps) {
    return (
        <section>
            <h2>Monthly summary</h2>
            <input type="month" value={selectedMonth} onChange={(e) => onMonthChange(e.target.value)} />
            <SummaryCards totalIncome={monthlyIncome} totalExpenses={monthlyExpenses} balance={monthlyBalance} currency={currency}/>
            <CategoryBarChart statistics={monthlyExpenseCategoryStatistics} title="Monthly expenses by category" currency={currency} />
            <CategoryBarChart statistics={monthlyIncomeCategoryStatistics} title="Monthly income by category" currency={currency}/>
        </section>
    )
}

export default MonthlySummary;