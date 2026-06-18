import SummaryCards from "./SummaryCards";
import type { CategoryStatistic } from "../types/statistics";
import CategoryStatistics from "./CategoryStatistics";
import type { CurrencyCode } from "../types/currency";

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

function MonthlySummary
    ({
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
            <input type="month" value={selectedMonth} onChange={(e) => onMonthChange(e.target.value)}></input>
            <SummaryCards totalIncome={monthlyIncome} totalExpenses={monthlyExpenses} balance={monthlyBalance} currency={currency}/>
            <CategoryStatistics statistics={monthlyExpenseCategoryStatistics} title="Monthly expenses by category" currency={currency}/>
            <CategoryStatistics statistics={monthlyIncomeCategoryStatistics} title="Monthly income by category" currency={currency}/>
        </section>
    )
}

export default MonthlySummary;