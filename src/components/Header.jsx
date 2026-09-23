import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            {/* <!-- ═══════ EST. 2026 DECORATOR ═══════ --> */}
            <div className="est-label" aria-hidden="true">Est. 2026</div>

            {/* <!-- ═══════ FLOATING PILL NAV ═══════ --> */}
            <nav className="pill-nav" aria-label="Main Navigation">
                <Link to="/" className="active">Home</Link>
                <a href="#recipes">Recipes</a>
                <a href="#product">Our Yoghurt</a>
                <a href="#process">Process</a>
                <a href="#video">Our Story</a>
                <a href="#signature">Contact</a>

                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>

            {/* <!-- ═══════ MOBILE ═══════ --> */}
            <button className="hamburger" aria-label="Toggle Navigation"><span></span><span></span><span></span></button>
            <nav className="mobile-nav" aria-label="Mobile Navigation">
                <a href="#hero">Home</a>
                <a href="#lookbook">Lookbook</a>
                <a href="#product">Our Yoghurt</a>
                <a href="#process">Process</a>
                <a href="#video">Our Story</a>
                <a href="#signature">Contact</a>
                
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </>
    )
}