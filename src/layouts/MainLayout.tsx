import { Outlet } from "react-router";
import { NavLink } from "react-router";
import CurrencySelector from "../components/CurrencySelector";
import type { CurrencyCode } from "../types/currency";

type MainLayoutProps = {
    currency: CurrencyCode;
    onCurrencyChange: (currency: CurrencyCode) => void;
}

function MainLayout({currency, onCurrencyChange}: MainLayoutProps) {
    return (
        <>
            <h1>Finance Dashboard</h1>

            <nav>
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/transactions">Transactions</NavLink>
            </nav>
            <CurrencySelector currency={currency} onCurrencyChange={onCurrencyChange} />

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout;