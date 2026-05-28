import { Link } from "react-router";

function NotFoundPage(){
    return (
        <section>
            <h2>Error 404: Page was not found</h2>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Back to dashboard</Link>
        </section>
    )
}

export default NotFoundPage;