import { useState, type FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router";

import type { Transaction, TransactionType } from "../types/transaction";
import validateTransactionForm from "../utils/validateTransactionForm";
import type { UpdateTransactionInput } from "../api/transactionsApi";

type TransactionEditPageProps = {
    transactions: Transaction[];
    onUpdateTransaction: (id: string, data: UpdateTransactionInput) => Promise<Transaction>;
    categoryOptions: string[];
};

function TransactionEditPage({ transactions, onUpdateTransaction, categoryOptions }: TransactionEditPageProps) {
    const { id } = useParams();
    const transaction = transactions.find(item => item.id === id);

    const [transactionTitle, setTransactionTitle] = useState(transaction?.title ?? "");
    const [transactionAmount, setTransactionAmount] = useState(transaction ? String(transaction.amount) : "");
    const [type, setType] = useState<TransactionType>(transaction?.type ?? "expense");
    const [category, setCategory] = useState(transaction?.category ?? "");
    const [date, setDate] = useState(transaction?.date ?? "");

    const [formError, setFormError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!id || !transaction) {
            return;
        }

        const numericAmount = Number(transactionAmount);

        setFormError("");

        const validationError = validateTransactionForm({
            title: transactionTitle,
            amount: transactionAmount,
            category,
            date,
        });

        if (validationError) {
            setFormError(validationError);
            return;
        }

        const updatedTransactionData: UpdateTransactionInput = {
            title: transactionTitle.trim(),
            amount: numericAmount,
            type,
            category: category.trim().toLowerCase(),
            date,
        };

        try {
            const updatedTransaction = await onUpdateTransaction(
                id,
                updatedTransactionData
            );

            navigate(`/transactions/${updatedTransaction.id}`);
        } catch {
            setFormError("Failed to update transaction");
        }
    };

    if (!transaction) {
        return (
            <section className="details-card">
                <h2>Transaction not found</h2>
                <p className="empty-state">The transaction you are trying to edit does not exist.</p>

                <Link className="button-link" to="/transactions">
                    Back to transactions
                </Link>
            </section>
        );
    }

    return (
        <section className="transaction-form-section">
            <h2>Edit transaction</h2>

            <form className="transaction-form" onSubmit={handleSubmit}>
                <div className="form-field form-field--wide">
                    <label htmlFor="edit-transaction-title">Title</label>
                    <input
                        id="edit-transaction-title"
                        type="text"
                        value={transactionTitle}
                        onChange={(e) => setTransactionTitle(e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="edit-transaction-amount">Amount</label>
                    <input
                        id="edit-transaction-amount"
                        type="number"
                        min="0"
                        step="0.01"
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="edit-transaction-type">Type</label>
                    <select
                        id="edit-transaction-type"
                        value={type}
                        onChange={(e) => setType(e.target.value as TransactionType)}
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>

                <div className="form-field form-field--wide">
                    <label htmlFor="edit-transaction-category">Category</label>
                    <input
                        id="edit-transaction-category"
                        list="transaction-category-options"
                        type="text"
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
                    <label htmlFor="edit-transaction-date">Date</label>
                    <input
                        id="edit-transaction-date"
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
                    <Link className="button-link button-link--secondary" to={`/transactions/${transaction.id}`}>
                        Cancel
                    </Link>

                    <button type="submit">
                        Save changes
                    </button>
                </div>
            </form>
        </section>
    );
}

export default TransactionEditPage;