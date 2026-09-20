export default function Lookbook() {
    return (
        <>
            {/* <!-- SECTION 2: THE LOOKBOOK --> */}
            <section className="canvas-section lookbook" id="lookbook">
                <div className="lookbook-header reveal">
                    <h2 className="lookbook-title">The Lookbook</h2>
                    <span className="lookbook-count">01 — 06</span>
                </div>
                <div className="lookbook-track">
                    <div className="lookbook-card">
                        <img src="images/ivory-flow-11.jpg" alt="Minimalist living room with warm textures" loading="lazy" />
                        <span className="lookbook-card-label">No. 01 — Living</span>
                    </div>
                    <div className="lookbook-card">
                        <img src="images/ivory-flow-12.jpg" alt="Artisan ceramic collection" loading="lazy" />
                        <span className="lookbook-card-label">No. 02 — Ceramics</span>
                    </div>
                    <div className="lookbook-card">
                        <img src="images/ivory-flow-13.jpg" alt="Natural linen textiles draped on chair" loading="lazy" />
                        <span className="lookbook-card-label">No. 03 — Textiles</span>
                    </div>
                    <div className="lookbook-card">
                        <img src="images/ivory-flow-14.jpg" alt="Handcrafted wooden furniture" loading="lazy" />
                        <span className="lookbook-card-label">No. 04 — Craft</span>
                    </div>
                    <div className="lookbook-card">
                        <img src="images/ivory-flow-15.jpg" alt="Serene bedroom interior" loading="lazy" />
                        <span className="lookbook-card-label">No. 05 — Bedroom</span>
                    </div>
                    <div className="lookbook-card">
                        <img src="images/ivory-flow-16.jpg" alt="Architectural detail with light" loading="lazy" />
                        <span className="lookbook-card-label">No. 06 — Light</span>
                    </div>
                </div>
                <div className="lookbook-footer reveal">
                    <a href="#" className="cta-link">View Full Lookbook</a>
                    <div className="lookbook-arrows">
                        <button className="lookbook-arrow" id="lbPrev" aria-label="Previous">
                            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
                        </button>
                        <button className="lookbook-arrow" id="lbNext" aria-label="Next">
                            <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18" /></svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}