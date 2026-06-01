import { useState } from "react";
import type { TransactionType, Transaction } from "../types/transaction";
import { useNavigate, useParams } from "react-router";

type TransactionEditPageProps = {
    transactions: Transaction[];
    onUpdateTransaction: (transaction:Transaction) => void;
}

function TransactionEditPage({transactions, onUpdateTransaction}:TransactionEditPageProps) {
    const { id } = useParams();
    const transaction = transactions.find(item => item.id === id);

    const [transactionTitle, setTransactionTitle] = useState(transaction?.title ?? "");
    const [transactionAmount, setTransactionAmount] = useState(transaction ? String(transaction?.amount) : "");
    const [type, setType] = useState<TransactionType>(transaction?.type ?? "expense");
    const [category, setCategory] = useState(transaction?.category ?? "");
    const [date, setDate] = useState(transaction?.date ?? "");

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const numericAmount = Number(transactionAmount);

        if(!id || !transaction) {
            return;
        }

         if (!transactionTitle.trim()) {
            return;
        }

        if (!category.trim()) {
            return;
        }

        if (!date) {
            return;
        }

        if (!transactionAmount || !Number.isFinite(numericAmount) || numericAmount <= 0) {
            return;
        }

        const updatedTransaction: Transaction = {
            id: id,
            title: transactionTitle.trim(),
            amount: numericAmount,
            type: type,
            category: category.trim(),
            date: date,
        };

        onUpdateTransaction(updatedTransaction);
        navigate(`/transactions/${updatedTransaction.id}`);
    }

    if(!transaction) {
        return(
            <section>
                <h2>Transaction not found</h2>
            </section>
        )
        }
    
    return(
        <section>
            <h2>Edit transaction</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={transactionTitle} onChange={(e) => setTransactionTitle(e.target.value)}/>
                <input type="number" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} />
                <select value={type} onChange={(e) => setType(e.target.value as TransactionType)}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                <button type="submit">Save changes</button>
            </form>
        </section>
    )
}

export default TransactionEditPage;