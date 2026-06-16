import type { Transaction } from "../types/transaction";
import type { TransactionSummary } from "../types/statistics";

function getTransactionSummary(
  transactions: Transaction[]
): TransactionSummary {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = totalIncome - totalExpenses;

  return {
    totalIncome,
    totalExpenses,
    balance,
  };
}

export default getTransactionSummary;