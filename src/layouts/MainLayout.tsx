import { Outlet } from "react-router";
import { NavLink } from "react-router";

function MainLayout() {
    return (
        <>
            <h1>Finance Dashboard</h1>

            <nav>
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/transactions">Transactions</NavLink>
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout;