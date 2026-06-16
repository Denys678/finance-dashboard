import SummaryCards from "./SummaryCards";
import type { CategoryStatistic } from "../types/statistics";
import CategoryStatistics from "./CategoryStatistics";

type MonthlySummaryProps = {
    selectedMonth: string;
    onMonthChange: (month: string) => void;
    monthlyIncome: number;
    monthlyExpenses: number;
    monthlyBalance: number;
    monthlyExpenseCategoryStatistics: CategoryStatistic[];
    monthlyIncomeCategoryStatistics: CategoryStatistic[];
}

function MonthlySummary ({selectedMonth, onMonthChange, monthlyIncome, monthlyExpenses, monthlyBalance, monthlyExpenseCategoryStatistics, monthlyIncomeCategoryStatistics}: MonthlySummaryProps){
    return (
        <section>
            <h2>Monthly summary</h2>
            <input type="month" value={selectedMonth} onChange={(e) => onMonthChange(e.target.value)}></input>
            <SummaryCards totalIncome={monthlyIncome} totalExpenses={monthlyExpenses} balance={monthlyBalance}/>
            <CategoryStatistics statistics={monthlyExpenseCategoryStatistics} title="Monthly expenses by category" />
            <CategoryStatistics statistics={monthlyIncomeCategoryStatistics} title="Monthly income by category" />
        </section>
    )
}

export default MonthlySummary;