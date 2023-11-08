import { Link, useLocation } from "react-router-dom";

function Nav() {
    const { pathname } = useLocation();

    return (
        <nav className="nav nav-tabs mt-2">
            <Link
                className={`nav-link ${
                    pathname.includes("a3") ? "active" : ""
                }`}
                to="/labs/a3"
            >
                A3
            </Link>
            <Link
                className={`nav-link ${
                    pathname.includes("a4") ? "active" : ""
                }`}
                to="/labs/a4"
            >
                A4
            </Link>
            <Link
                className={`nav-link ${
                    pathname.includes("a5") ? "active" : ""
                }`}
                to="/labs/a5"
            >
                A5
            </Link>
            <Link
                className={`nav-link ${
                    pathname.includes("hello") ? "active" : ""
                }`}
                to="/hello"
            >
                Hello
            </Link>
            <Link
                className={`nav-link ${
                    pathname.includes("kanbas") ? "active" : ""
                }`}
                to="/kanbas"
            >
                Kanbas
            </Link>
        </nav>
    );
}

export default Nav;
