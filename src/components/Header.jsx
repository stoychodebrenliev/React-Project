import { Link, useLocation } from "react-router"
import { supabase } from "../lib/supabaseClient";
import "../styles/Header.css";

export default function Header({ user }) {
    const location = useLocation();

    async function handleLogout() {
        await supabase.auth.signOut();
    }
    return (
        <>
            {/* <!-- ═══════ EST. 2026 DECORATOR ═══════ --> */}
            <div className="est-label" aria-hidden="true">Est. 2026</div>

            {/* <!-- ═══════ FLOATING PILL NAV ═══════ --> */}
            <nav className="pill-nav" aria-label="Main Navigation">
                <Link to="/" className={location.pathname === "/" && location.hash === "" ? "active" : ""}
                             onClick={() => window.scrollTo(0, 0)}>Home</Link>

                <a href="/#recipes" className={location.hash === "#recipes" ? "active" : ""}>Recipes</a>
                <a href="/#product" className={location.hash === "#product" ? "active" : ""}>Our Yoghurt</a>
                <a href="/#process" className={location.hash === "#process" ? "active" : ""}>Process</a>
                <a href="/#brand" className={location.hash === "#brand" ? "active" : ""}>Our Story</a>
                <a href="/#signature" className={location.hash === "#signature" ? "active" : ""}>Contact</a>

                {user ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>Login</Link>
                        <Link to="/register" className={location.pathname === "/register" ? "active" : ""}>Register</Link>
                    </>
                )}
            </nav>

            {/* <!-- ═══════ MOBILE ═══════ --> */}
            <button className="hamburger" aria-label="Toggle Navigation"><span></span><span></span><span></span></button>
            <nav className="mobile-nav" aria-label="Mobile Navigation">
                <Link to="/" className={location.pathname === "/" && location.hash === "" ? "active" : ""}
                      onClick={() => window.scrollTo(0, 0)}>Home</Link>
                <a href="/#recipes" className={location.hash === "#recipes" ? "active" : ""}>Recipes</a>
                <a href="/#product" className={location.hash === "#product" ? "active" : ""}>Our Yoghurt</a>
                <a href="/#process" className={location.hash === "#process" ? "active" : ""}>Process</a>
                <a href="/#video" className={location.hash === "#video" ? "active" : ""}>Our Story</a>
                <a href="/#signature" className={location.hash === "#signature" ? "active" : ""}>Contact</a>

                {user ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>Login</Link>
                        <Link to="/register" className={location.pathname === "/register" ? "active" : ""}>Register</Link>
                    </>
                )}
            </nav>
        </>
    )
}