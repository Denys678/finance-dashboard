import { Link } from "react-router";
import type { Transaction } from "../types/transaction";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

type TransactionItemProps = {
    transaction: Transaction;
    onDeleteTransaction: (id: string) => void;
};

function TransactionItem({ transaction, onDeleteTransaction }: TransactionItemProps) {
    const amountPrefix: string = transaction.type === "income" ? "+" : "-";
    const formattedAmount: string = `${amountPrefix}${transaction.amount}`;

    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    return (
        <li>
            <div>
                <strong>{transaction.title}</strong>
                <span>{transaction.category}</span>
            </div>
            <div>
                <span>{formattedAmount}</span>
                <span>{transaction.date}</span>
            </div>
            <div>
                <button type="button" onClick={() => setIsConfirmOpen(true)}>Delete</button>
                {isConfirmOpen && (<ConfirmDialog
                    title="Delete transaction"
                    message= {`Are you sure you want to delete transaction ${transaction.title}`}
                    onConfirm={() => onDeleteTransaction(transaction.id)}
                    onCancel={() => setIsConfirmOpen(false)}
                />
                )}
                <Link to={`/transactions/${transaction.id}`}>View details</Link>
            </div>
        </li>
    )
}

export default TransactionItem;