import type { Transaction } from "../types/transaction";
import TransactionItem from "./TransactionItem";

type TransactionListProps = {transactions: Transaction[];};

function TransactionList({ transactions }: TransactionListProps) {
    return (
        <section>
            <h2>Transactions</h2>
            <ul>
                {transactions.map(transaction => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </section>
    )
}

export default TransactionList