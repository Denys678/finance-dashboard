import type { Transaction } from "../types/transaction";
import TransactionItem from "./TransactionItem";

type TransactionListProps = {transactions: Transaction[];
                             onDeleteTransaction:(id: string) => void;
                            };

function TransactionList({ transactions, onDeleteTransaction }: TransactionListProps) {
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