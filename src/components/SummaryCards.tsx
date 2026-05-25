type SummaryCardsProps = {
    totalIncome: number;
    totalExpenses: number;
    balance: number;
}

function SummaryCards({ totalIncome, totalExpenses, balance }: SummaryCardsProps) {
    return (
        <section>
            <p>Total income: {totalIncome}</p>
            <p>Total expenses: {totalExpenses}</p>
            <p>Balance: {balance}</p>
        </section>
    )
}

export default SummaryCards;