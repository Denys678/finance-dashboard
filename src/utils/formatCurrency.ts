import type { CurrencyCode } from "../types/currency";

export function formatCurrency (amount: number, currency: CurrencyCode): string {
    const newAmount: string = new Intl.NumberFormat(navigator.language, {style: "currency", currency}).format(amount);

    return newAmount;
}
