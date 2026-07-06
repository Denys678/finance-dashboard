import type { CurrencyCode, ExchangeRates } from "../types/currency";
import type { Transaction } from "../types/transaction";

import TransactionItem from "./TransactionItem";

type TransactionListProps = {
    transactions: Transaction[];
    onDeleteTransaction: (id: string) => Promise<void>;
    currency: CurrencyCode;
    rates: ExchangeRates;
};

function TransactionList({ transactions, onDeleteTransaction, currency, rates }: TransactionListProps) {
    if (transactions.length === 0) {
        return (
            <section className="transaction-list-section">
                <h2>Transactions</h2>
                <p className="empty-state">No transactions found.</p>
            </section>
        );
    }

    return (
        <section className="transaction-list-section">
            <h2>Transactions</h2>

            <ul className="transaction-list">
                {transactions.map(transaction => (
                    <TransactionItem
                        key={transaction.id}
                        transaction={transaction}
                        onDeleteTransaction={onDeleteTransaction}
                        currency={currency}
                        rates={rates}
                    />
                ))}
            </ul>
        </section>
    );
}

export default TransactionList;