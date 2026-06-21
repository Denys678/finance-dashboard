import { Outlet, NavLink } from "react-router";
import CurrencySelector from "../components/CurrencySelector";
import type { CurrencyCode } from "../types/currency";

type MainLayoutProps = {
    currency: CurrencyCode;
    onCurrencyChange: (currency: CurrencyCode) => void;
    isExchangeRatesLoading: boolean;
    exchangeRatesError: string | null;
};

function MainLayout({
    currency,
    onCurrencyChange,
    isExchangeRatesLoading,
    exchangeRatesError
}: MainLayoutProps) {
    return (
        <div className="app-shell">
            <header className="app-header">
                <div>
                    <h1>Finance Dashboard</h1>
                    <p className="app-subtitle">Track income, expenses, and monthly statistics</p>
                </div>

                <CurrencySelector
                    currency={currency}
                    onCurrencyChange={onCurrencyChange}
                    isExchangeRatesLoading={isExchangeRatesLoading}
                    exchangeRatesError={exchangeRatesError}
                />
            </header>

            <nav className="app-nav">
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/transactions">Transactions</NavLink>
            </nav>

            <main className="app-main">
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;