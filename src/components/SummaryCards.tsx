import type { CurrencyCode, ExchangeRates } from "../types/currency";
import convertCurrency from "../utils/convertCurrency";
import { formatCurrency } from "../utils/formatCurrency";

type SummaryCardsProps = {
    totalIncome: number;
    totalExpenses: number;
    balance: number;
    currency: CurrencyCode;
    rates: ExchangeRates;
}

function SummaryCards({ totalIncome, totalExpenses, balance, currency, rates }: SummaryCardsProps) {
    const convertedIncome = convertCurrency(totalIncome, currency, rates);
    const convertedExpenses = convertCurrency(totalExpenses, currency, rates);
    const convertedBalance = convertCurrency(balance, currency, rates);
    
    return (
        <section>
            <p>Total income: {formatCurrency(convertedIncome, currency)}</p>
            <p>Total expenses: {formatCurrency(convertedExpenses, currency)}</p>
            <p>Balance: {formatCurrency(convertedBalance, currency)}</p>
        </section>
    )
}

export default SummaryCards;