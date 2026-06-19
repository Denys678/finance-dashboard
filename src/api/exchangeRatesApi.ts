import type { CurrencyCode, ExchangeRates } from "../types/currency";

type ExchangeRateApiItem = {
    quote: CurrencyCode;
    rate: number;
};

export async function fetchExchangeRates(): Promise<ExchangeRates> {
    const response = await fetch("https://api.frankfurter.dev/v2/rates?base=UAH&quotes=USD,EUR");

    if (!response.ok) {
        throw new Error(`Failed to fetch exchange rates. Status: ${response.status}`);
    }

    const result: ExchangeRateApiItem[] = await response.json();

    const normalizedRates = result.reduce<ExchangeRates>((acc, item) => {
        acc[item.quote] = item.rate;
        return acc;
    }, {});

    return normalizedRates;
}