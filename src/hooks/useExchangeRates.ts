import { useEffect, useState } from "react";

import { fetchExchangeRates } from "../api/exchangeRatesApi";
import type { ExchangeRates } from "../types/currency";

function useExchangeRates() {
    const [rates, setRates] = useState<ExchangeRates>({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadExchangeRates = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const exchangeRates = await fetchExchangeRates();

                setRates(exchangeRates);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError(String(err));
                }
            } finally {
                setIsLoading(false);
            }
        };

        loadExchangeRates();
    }, []);

    return { rates, isLoading, error };
}

export default useExchangeRates;