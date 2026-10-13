import { Link, useLocation } from "react-router"
import { supabase } from "../lib/supabaseClient";
import "../styles/Header.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useEffect } from "react";

export default function Header() {
    const user = useContext(UserContext);
    const location = useLocation();

    async function handleLogout() {
        await supabase.auth.signOut();
    }

    useEffect(() => {
        if(location.pathname === "/" && location.hash) {
            const section = document.querySelector(location.hash);
            if(section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <>
            {/* <!-- ═══════ EST. 2026 DECORATOR ═══════ --> */}
            <div className="est-label" aria-hidden="true">Est. 2026</div>

            {/* <!-- ═══════ FLOATING PILL NAV ═══════ --> */}
            <nav className="pill-nav" aria-label="Main Navigation">
                <Link to="/" className={location.pathname === "/" && location.hash === "" ? "active" : ""}
                             onClick={() => window.scrollTo(0, 0)}>Home</Link>

                <Link to="/#recipes" className={location.hash === "#recipes" ? "active" : ""}>Recipes</Link>
                <Link to="/recipes" className={location.pathname === "/recipes" ? "active" : ""}>All Recipes</Link>
                <Link to="/#product" className={location.hash === "#product" ? "active" : ""}>Our Yoghurt</Link>
                <Link to="/#process" className={location.hash === "#process" ? "active" : ""}>Process</Link>
                <Link to="/#brand" className={location.hash === "#brand" ? "active" : ""}>Our Story</Link>
                <Link to="/#signature" className={location.hash === "#signature" ? "active" : ""}>Contact</Link>

                {user ? (
                    <>
                    <Link to="/favorites" className={location.pathname === "/favorites" ? "active" : ""}>Favorites</Link>
                    <Link to="/create-recipe" className={location.pathname === "/create-recipe" ? "active" : ""}>Create Recipe</Link>
                    <Link to={`/users/${user.id}/recipes`} className={location.pathname === `/users/${user.id}/recipes` ? "active" : ""}>My Recipes</Link>
                    <button onClick={handleLogout}>Logout</button>
                    </>
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
                    <>
                    <Link to="/favorites" className={location.pathname === "/favorites" ? "active" : ""}>Favorites</Link>
                    <button onClick={handleLogout}>Logout</button>
                    </>
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