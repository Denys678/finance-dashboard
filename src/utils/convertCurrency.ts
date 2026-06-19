import { BASE_CURRENCY } from "../constants/currency";
import type { CurrencyCode, ExchangeRates } from "../types/currency";

function convertCurrency(amount: number, currency: CurrencyCode, rates: ExchangeRates): number {
    if(currency === BASE_CURRENCY) {
        return amount;
    }

    const rate = rates[currency];

    if(rate === undefined) {
        return amount;
    }

    return amount * rate;
}

export default convertCurrency;