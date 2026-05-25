import type { Transaction } from "../types/transaction";

type TransactionItemProps = {
    transaction: Transaction;                         
    onDeleteTransaction: (id:string) => void;
};

function TransactionItem({transaction, onDeleteTransaction}: TransactionItemProps) {
    const amountPrefix: string = transaction.type === "income" ? "+" : "-";
    const formattedAmount: string = `${amountPrefix}${transaction.amount}`;
    
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
                <button onClick={() => onDeleteTransaction(transaction.id)}>Delete</button>
            </div>
        </li>
    )
}

export default TransactionItem;