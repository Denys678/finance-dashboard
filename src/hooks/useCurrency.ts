import { useState, useEffect } from "react";
import type { CurrencyCode } from "../types/currency";
import { CURRENCY_STORAGE_KEY } from "../constants/storageKeys";

function isCurrencyCode(value: string | null): value is CurrencyCode {
    return value === "UAH" || value === "USD" || value === "EUR";
}

function useCurrency() {
    const [currency, setCurrency] = useState<CurrencyCode>(() => {
        const savedCurrency = localStorage.getItem(CURRENCY_STORAGE_KEY);

        if (isCurrencyCode(savedCurrency)) {
            return savedCurrency;
        }

        return "UAH";
    });

    useEffect(() => {
        localStorage.setItem(CURRENCY_STORAGE_KEY, currency);
    }, [currency]);

    return {
        currency,
        setCurrency
    }
}

export default useCurrency;