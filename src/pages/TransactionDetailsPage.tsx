import type { Transaction } from "../types/transaction";
import { Link, useParams } from "react-router";
import { formatCurrency } from "../utils/formatCurrency";
import type { CurrencyCode, ExchangeRates } from "../types/currency";
import convertCurrency from "../utils/convertCurrency";

type TransactionDetailsPageProps = {
    transactions: Transaction[];
    currency: CurrencyCode;
    rates: ExchangeRates;
};

function TransactionDetailsPage({ transactions, currency, rates }: TransactionDetailsPageProps) {
    const { id } = useParams();

    const transaction = transactions.find(item => item.id === id);

    if (!transaction) {
        return (
            <section className="details-card">
                <h2>Transaction details</h2>
                <p className="empty-state">The transaction you are looking for does not exist.</p>
                <Link className="button-link" to="/transactions">
                    Back to transactions
                </Link>
            </section>
        );
    }

    const amountPrefix = transaction.type === "income" ? "+" : "-";
    const convertedAmount = convertCurrency(transaction.amount, currency, rates);
    const formattedAmount = `${amountPrefix}${formatCurrency(convertedAmount, currency)}`;

    return (
        <section className="details-card">
            <div className="details-card__header">
                <div>
                    <h2>{transaction.title}</h2>
                    <p className="details-card__subtitle">{transaction.category}</p>
                </div>

                <span className={`details-card__amount details-card__amount--${transaction.type}`}>
                    {formattedAmount}
                </span>
            </div>

            <dl className="details-list">
                <div>
                    <dt>Category</dt>
                    <dd>{transaction.category}</dd>
                </div>

                <div>
                    <dt>Type</dt>
                    <dd>{transaction.type}</dd>
                </div>

                <div>
                    <dt>Date</dt>
                    <dd>{transaction.date}</dd>
                </div>
            </dl>

            <div className="details-actions">
                <Link className="button-link" to={`/transactions/${transaction.id}/edit`}>
                    Edit transaction
                </Link>

                <Link className="button-link button-link--secondary" to="/transactions">
                    Back to transactions
                </Link>
            </div>
        </section>
    );
}

export default TransactionDetailsPage;