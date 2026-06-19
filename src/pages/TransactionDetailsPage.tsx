import type { Transaction } from "../types/transaction";
import { Link, useParams } from "react-router";
import { formatCurrency } from "../utils/formatCurrency";
import type { CurrencyCode, ExchangeRates } from "../types/currency";
import convertCurrency from "../utils/convertCurrency";

type TransactionDetailsPageProps = {
    transactions: Transaction[];
    currency: CurrencyCode;
    rates: ExchangeRates;
}

function TransactionDetailsPage({transactions, currency, rates} : TransactionDetailsPageProps) {
    const { id } = useParams();
    
    const transaction = transactions.find(item => item.id === id);

    if(!transaction) {
        return (
            <section>
                <h2>Transaction details</h2>
                <p>The transaction you are looking for does not exist.</p>
            </section>
        )
    }

    return (
        <section>
            <h2>{transaction.title}</h2>
            <p>Category: {transaction.category}</p>
            <p>Type: {transaction.type}</p>
            <p>Amount: {transaction.type === "expense" ? `- ${formatCurrency(convertCurrency(transaction.amount, currency, rates), currency)}` : `+ ${formatCurrency(convertCurrency(transaction.amount, currency, rates), currency)}`}</p>
            <p>Date: {transaction.date}</p>
            <Link to={`/transactions/${transaction.id}/edit`}>Edit transaction</Link>
            <Link to="/transactions">Back to transactions</Link>
        </section>
    );
}

export default TransactionDetailsPage;