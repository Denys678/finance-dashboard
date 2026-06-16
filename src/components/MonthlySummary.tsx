import SummaryCards from "./SummaryCards";

type MonthlySummaryProps = {
    selectedMonth: string;
    onMonthChange: (month: string) => void;
    monthlyIncome: number;
    monthlyExpense: number;
    monthlyBalance: number;
}

function MonthlySummary ({selectedMonth, onMonthChange, monthlyIncome, monthlyExpense, monthlyBalance}: MonthlySummaryProps){
    return (
        <section>
            <h2>Monthly summary</h2>
            <input type="month" value={selectedMonth} onChange={(e) => onMonthChange(e.target.value)}></input>
            <SummaryCards totalIncome={monthlyIncome} totalExpenses={monthlyExpense} balance={monthlyBalance}/>
        </section>
    )
}

export default MonthlySummary;