import type { CurrencyCode } from "../types/currency";

type CurrencySelectorProps = {
    currency: CurrencyCode;
    onCurrencyChange: (currency: CurrencyCode) => void;
    isExchangeRatesLoading: boolean;
    exchangeRatesError: string | null;
};

function CurrencySelector({
    currency,
    onCurrencyChange,
    isExchangeRatesLoading,
    exchangeRatesError
}: CurrencySelectorProps) {
    return (
        <div>
            <label>
                Currency:
                <select
                    value={currency}
                    onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
                >
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </label>

            {isExchangeRatesLoading && (
                <p>Loading exchange rates...</p>
            )}

            {exchangeRatesError && (
                <p>Exchange rates are unavailable. Showing fallback values.</p>
            )}
        </div>
    );
}

export default CurrencySelector;