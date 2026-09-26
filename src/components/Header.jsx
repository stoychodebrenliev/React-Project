import { Link } from "react-router"
import { supabase } from "../lib/supabaseClient";

export default function Header({ user }) {

    async function handleLogout() {
        await supabase.auth.signOut();
    }
    return (
        <>
            {/* <!-- ═══════ EST. 2026 DECORATOR ═══════ --> */}
            <div className="est-label" aria-hidden="true">Est. 2026</div>

            {/* <!-- ═══════ FLOATING PILL NAV ═══════ --> */}
            <nav className="pill-nav" aria-label="Main Navigation">
                <Link to="/" className="active">Home</Link>
                <Link to="/recipes">Recipes</Link>

                <a href="/#product">Our Yoghurt</a>
                <a href="/#process">Process</a>
                <a href="/#brand">Our Story</a>
                <a href="/#signature">Contact</a>

                {user ? (
                    <button className="pill-nav" onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>

            {/* <!-- ═══════ MOBILE ═══════ --> */}
            <button className="hamburger" aria-label="Toggle Navigation"><span></span><span></span><span></span></button>
            <nav className="mobile-nav" aria-label="Mobile Navigation">
                <Link to="/">Home</Link>
                <Link to="/recipes">Recipes</Link>
                <a href="/#product">Our Yoghurt</a>
                <a href="/#process">Process</a>
                <a href="/#video">Our Story</a>
                <a href="/#signature">Contact</a>

                {user ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </>
    )
}