import type { CurrencyCode } from "../types/currency";
import { formatCurrency } from "../utils/formatCurrency";

type SummaryCardsProps = {
    totalIncome: number;
    totalExpenses: number;
    balance: number;
    currency: CurrencyCode;
}

function SummaryCards({ totalIncome, totalExpenses, balance, currency }: SummaryCardsProps) {
    return (
        <section>
            <p>Total income: {formatCurrency(totalIncome, currency)}</p>
            <p>Total expenses: {formatCurrency(totalExpenses, currency)}</p>
            <p>Balance: {formatCurrency(balance, currency)}</p>
        </section>
    )
}

export default SummaryCards;