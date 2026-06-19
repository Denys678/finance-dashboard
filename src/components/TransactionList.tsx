import type { CurrencyCode, ExchangeRates } from "../types/currency";
import type { Transaction } from "../types/transaction";

import TransactionItem from "./TransactionItem";

type TransactionListProps = {
    transactions: Transaction[];
    onDeleteTransaction: (id: string) => void;
    currency: CurrencyCode;
    rates: ExchangeRates;
};

function TransactionList({ transactions, onDeleteTransaction, currency, rates }: TransactionListProps) {
    if (transactions.length === 0) {
        return (
            <section>
                <h2>Transactions</h2>
                <p>No transactions found</p>
            </section>
        )
    }
    
    return (
        <section>
            <h2>Transactions</h2>
            <ul>
                {transactions.map(transaction => (
                    <TransactionItem key={transaction.id} transaction={transaction} onDeleteTransaction={onDeleteTransaction} currency={currency} rates={rates} />
                ))}
            </ul>
        </section>
    )
}

export default TransactionList