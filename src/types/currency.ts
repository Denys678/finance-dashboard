export type CurrencyCode = "UAH" | "USD" | "EUR";

export type ExchangeRates = Partial<Record<CurrencyCode, number>>;