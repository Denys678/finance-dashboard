import { useState } from "react";
import { useNavigate } from "react-router";
import type { Transaction, TransactionType } from "../types/transaction";

type TransactionFormProps = {
    onAddTransaction: (transaction:Transaction) => void;
}

function TransactionForm ({onAddTransaction}:TransactionFormProps){
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState<TransactionType>("expense");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const navigate = useNavigate();
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const numericAmount = Number(amount);

        if (!title.trim()) {
            return;
        }

        if (!category.trim()) {
            return;
        }

        if (!date) {
            return;
        }

        if (!amount || !Number.isFinite(numericAmount) || numericAmount <= 0) {
            return;
        }

        const newTransaction: Transaction = {
            id: crypto.randomUUID(),
            title: title.trim(),
            amount: numericAmount,
            type,
            category: category.trim().toLowerCase(),
            date,   
        };

        onAddTransaction(newTransaction);
        navigate(`/transactions/${newTransaction.id}`);

        setTitle("");
        setAmount("");
        setType("expense");
        setCategory("");
        setDate("");

    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Transaction title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <input placeholder="Transaction amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
            <select value={type} onChange={(e) => setType(e.target.value as TransactionType)}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <input placeholder="Transaction category" value={category} onChange={(e) => setCategory(e.target.value)}></input>
            <input placeholder="Transaction date" type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
            <button type="submit">Add transaction</button>
        </form>
    )

}

export default TransactionForm;