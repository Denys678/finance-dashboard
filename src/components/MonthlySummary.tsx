import SummaryCards from "./SummaryCards";
import type { CategoryStatistic } from "../types/statistics";
import type { CurrencyCode, ExchangeRates } from "../types/currency";
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
    rates: ExchangeRates;
}

function MonthlySummary({
        selectedMonth,
        onMonthChange,
        monthlyIncome,
        monthlyExpenses,
        monthlyBalance,
        monthlyExpenseCategoryStatistics,
        monthlyIncomeCategoryStatistics,
        currency,
        rates
    }: MonthlySummaryProps) {
    return (
        <section>
            <h2>Monthly summary</h2>
            <input type="month" value={selectedMonth} onChange={(e) => onMonthChange(e.target.value)} />
            <SummaryCards totalIncome={monthlyIncome} totalExpenses={monthlyExpenses} balance={monthlyBalance} currency={currency} rates={rates} />
            <CategoryBarChart statistics={monthlyExpenseCategoryStatistics} title="Monthly expenses by category" currency={currency} rates={rates} />
            <CategoryBarChart statistics={monthlyIncomeCategoryStatistics} title="Monthly income by category" currency={currency} rates={rates} />
        </section>
    )
}

export default MonthlySummary;