import SummaryCards from "../components/SummaryCards";

type DashboardPageProps = {
    totalIncome: number;
    totalExpenses: number;
    balance: number;
}

function DashboardPage({ totalIncome, totalExpenses, balance } : DashboardPageProps) {
    return (
        <SummaryCards totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />
    )
}

export default DashboardPage;