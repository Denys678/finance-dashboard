import { Link } from "react-router";
import type { Transaction } from "../types/transaction";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
import { formatCurrency } from "../utils/formatCurrency";
import type { CurrencyCode, ExchangeRates } from "../types/currency";
import convertCurrency from "../utils/convertCurrency";

type TransactionItemProps = {
    transaction: Transaction;
    onDeleteTransaction: (id: string) => void;
    currency: CurrencyCode;
    rates: ExchangeRates;
};

function TransactionItem({ transaction, onDeleteTransaction, currency, rates }: TransactionItemProps) {
    const amountPrefix: string = transaction.type === "income" ? "+" : "-";
    const convertedAmount = convertCurrency(transaction.amount, currency, rates);
    const formattedAmount: string = `${amountPrefix} ${formatCurrency(convertedAmount, currency)}`;

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
                    message= {`Are you sure you want to delete transaction ${transaction.title}?`}
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