import type { CurrencyCode } from "../types/currency"

type CurrencySelectorProps = {
    currency: CurrencyCode;
    onCurrencyChange: (currency: CurrencyCode) => void;
}

function CurrencySelector ({currency, onCurrencyChange}: CurrencySelectorProps) {
    return (
        <div>
            <select value={currency} onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}>
                <option value="UAH">UAH</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
            </select>
        </div>
    )
}

export default CurrencySelector;