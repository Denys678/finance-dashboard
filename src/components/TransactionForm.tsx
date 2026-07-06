import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

import type { Transaction, TransactionType } from "../types/transaction";
import type { CreateTransactionInput } from "../api/transactionsApi";
import validateTransactionForm from "../utils/validateTransactionForm";

type TransactionFormProps = {
    onAddTransaction: (transaction: CreateTransactionInput) => Promise<Transaction>
    categoryOptions: string[];
};

function TransactionForm({ onAddTransaction, categoryOptions }: TransactionFormProps) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState<TransactionType>("expense");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const [formError, setFormError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const numericAmount = Number(amount);

        setFormError("");

        const validationError = validateTransactionForm({
            title,
            amount,
            category,
            date,
        });

        if (validationError) {
            setFormError(validationError);
            return;
        }

        const newTransaction: CreateTransactionInput = {
            title: title.trim(),
            amount: numericAmount,
            type,
            category: category.trim().toLowerCase(),
            date,
        };

        try{
            const createdTransaction = await onAddTransaction(newTransaction);
            
            setTitle("");
            setAmount("");
            setType("expense");
            setCategory("");
            setDate("");

            navigate(`/transactions/${createdTransaction.id}`);
        } catch{
            setFormError("Fialed to create transaction");
        }
    };

    return (
        <section className="transaction-form-section">
            <h2>Add transaction</h2>

            <form className="transaction-form" onSubmit={handleSubmit}>
                <div className="form-field form-field--wide">
                    <label htmlFor="transaction-title">Title</label>
                    <input
                        id="transaction-title"
                        placeholder="Transaction title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="transaction-amount">Amount</label>
                    <input
                        id="transaction-amount"
                        placeholder="Transaction amount"
                        type="number"
                        min="0"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="transaction-type">Type</label>
                    <select
                        id="transaction-type"
                        value={type}
                        onChange={(e) => setType(e.target.value as TransactionType)}
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>

                <div className="form-field form-field--wide">
                    <label htmlFor="transaction-category">Category</label>
                    <input
                        id="transaction-category"
                        list="transaction-category-options"
                        placeholder="Transaction category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />

                    <datalist id="transaction-category-options">
                        {categoryOptions.map(categoryOption => (
                            <option key={categoryOption} value={categoryOption} />
                        ))}
                    </datalist>
                </div>

                <div className="form-field">
                    <label htmlFor="transaction-date">Date</label>
                    <input
                        id="transaction-date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                {formError && (
                    <p className="form-error" role="alert">
                        {formError}
                    </p>
                )}

                <div className="form-actions">
                    <button type="submit">Add transaction</button>
                </div>
            </form>
        </section>
    );
}

export default TransactionForm;