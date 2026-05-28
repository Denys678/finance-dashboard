import type { Transaction } from "../types/transaction";
import { Link, useParams } from "react-router";

type TransactionDetailsPageProps = {
    transactions: Transaction[];
}

function TransactionDetailsPage({transactions} : TransactionDetailsPageProps) {
    const { id } = useParams();
    
    const transaction = transactions.find(item => item.id === id);

    if(!transaction) {
        return (
            <section>
                <h2>Transaction details</h2>
                <p>The transaction you are looking for does not exist.</p>
            </section>
        )
    }

    return (
        <section>
            <h2>{transaction.title}</h2>
            <p>Category: {transaction.category}</p>
            <p>Type: {transaction.type}</p>
            <p>Amount: {transaction.type === "expense" ? `- ${transaction.amount}` : `+ ${transaction.amount}`}</p>
            <p>Date: {transaction.date}</p>
            <Link to="/transactions">Back to transactions</Link>
        </section>
    );
}

export default TransactionDetailsPage;