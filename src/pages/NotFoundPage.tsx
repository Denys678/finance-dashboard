import { Link } from "react-router";

function NotFoundPage() {
    return (
        <section className="details-card">
            <div>
                <h2>Error 404: Page not found</h2>
                <p className="empty-state">
                    The page you are looking for does not exist or was moved.
                </p>
            </div>

            <div className="details-actions">
                <Link className="button-link" to="/">
                    Back to dashboard
                </Link>

                <Link className="button-link button-link--secondary" to="/transactions">
                    Go to transactions
                </Link>
            </div>
        </section>
    );
}

export default NotFoundPage;