import type { Transaction } from "../types/transaction";

type TransactionItemProps = {transaction: Transaction;};

function TransactionItem({transaction}: TransactionItemProps) {
    return (
        <li>
            <strong>{transaction.title}</strong> - {transaction.amount} - {transaction.type} - {transaction.category} - {transaction.date}
        </li>
    )
}

export default TransactionItem;