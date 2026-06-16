type TransactionFormValues = {
    title: string;
    amount: string;
    category: string;
    date: string;
};

function validateTransactionForm (values: TransactionFormValues): string | null {
    const {title, amount, category, date} = values;
    const numericAmount = Number(amount);

    if (!title.trim()) {
        return "Title is required.";
    }

    if (!category.trim()) {
        return "Category is required.";
    }

    if (!date) {
        return "Date of transaction is required.";
    }

    if (!amount || !Number.isFinite(numericAmount) || numericAmount <= 0) {
        return "Amount must be a valid number greater than zero.";
    }


    return null;

}

export default validateTransactionForm;