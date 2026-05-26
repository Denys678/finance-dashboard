import type { Transaction } from "../types/transaction";
import TransactionItem from "./TransactionItem";

type TransactionListProps = {
    transactions: Transaction[];
    onDeleteTransaction:(id: string) => void;
};

function TransactionList({ transactions, onDeleteTransaction }: TransactionListProps) {
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
                    <TransactionItem key={transaction.id} transaction={transaction} onDeleteTransaction={onDeleteTransaction} />
                ))}
            </ul>
        </section>
    )
}

export default TransactionList