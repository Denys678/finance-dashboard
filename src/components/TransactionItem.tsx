import { Link } from "react-router";
import { useState } from "react";

import type { Transaction } from "../types/transaction";
import type { CurrencyCode, ExchangeRates } from "../types/currency";

import ConfirmDialog from "./ConfirmDialog";
import convertCurrency from "../utils/convertCurrency";
import { formatCurrency } from "../utils/formatCurrency";

type TransactionItemProps = {
  transaction: Transaction;
  onDeleteTransaction: (id: string) => Promise<void>;
  currency: CurrencyCode;
  rates: ExchangeRates;
};

function TransactionItem({
  transaction,
  onDeleteTransaction,
  currency,
  rates,
}: TransactionItemProps) {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  const amountPrefix = transaction.type === "income" ? "+" : "-";
  const convertedAmount = convertCurrency(transaction.amount, currency, rates);
  const formattedAmount = `${amountPrefix}${formatCurrency(convertedAmount, currency)}`;

  const handleConfirmDelete = async () => {
    try {
      setIsDeleting(true);
      setDeleteError("");

      await onDeleteTransaction(transaction.id);

      setIsConfirmOpen(false);
    } catch {
      setDeleteError("Failed to delete transaction");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <li className="transaction-item">
      <div className="transaction-item__main">
        <strong className="transaction-item__title">{transaction.title}</strong>
        <span className="transaction-item__category">
          {transaction.category}
        </span>
      </div>

      <div className="transaction-item__meta">
        <span
          className={`transaction-item__amount transaction-item__amount--${transaction.type}`}>
          {formattedAmount}
        </span>
        <span className="transaction-item__date">{transaction.date}</span>
      </div>

      <div className="transaction-item__actions">
        <Link
          className="transaction-item__link"
          to={`/transactions/${transaction.id}`}>
          View details
        </Link>

        <button
          className="button-danger"
          type="button"
          onClick={() => setIsConfirmOpen(true)}
          disabled={isDeleting}>
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>

      {deleteError && (
        <p className="form-error" role="alert">
          {deleteError}
        </p>
      )}

      {isConfirmOpen && (
        <ConfirmDialog
          title="Delete transaction"
          message={`Are you sure you want to delete transaction ${transaction.title}?`}
          onConfirm={handleConfirmDelete}
          onCancel={() => setIsConfirmOpen(false)}
        />
      )}
    </li>
  );
}

export default TransactionItem;