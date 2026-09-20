export default function Header() {
    return (
        <>
            {/* <!-- ═══════ EST. 2026 DECORATOR ═══════ --> */}
            <div className="est-label" aria-hidden="true">Est. 2026</div>

            {/* <!-- ═══════ FLOATING PILL NAV ═══════ --> */}
            <nav className="pill-nav" aria-label="Main Navigation">
                <a href="#hero" className="active">Home</a>
                <a href="#lookbook">Lookbook</a>
                <a href="#product">Shop</a>
                <a href="#process">Process</a>
                <a href="#video">Story</a>
                <a href="#signature">Contact</a>
            </nav>

            {/* <!-- ═══════ MOBILE ═══════ --> */}
            <button className="hamburger" aria-label="Toggle Navigation"><span></span><span></span><span></span></button>
            <nav className="mobile-nav" aria-label="Mobile Navigation">
                <a href="#hero">Home</a>
                <a href="#lookbook">Lookbook</a>
                <a href="#product">Shop</a>
                <a href="#process">Process</a>
                <a href="#video">Story</a>
                <a href="#signature">Contact</a>
            </nav>
        </>
    )
}