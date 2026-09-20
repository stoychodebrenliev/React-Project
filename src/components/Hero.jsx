export default function Hero() {
    return (
        <>
            <section className="canvas-section hero" id="hero">
                <div className="hero-image">
                    <img src="images/ivory-flow-01.jpg" alt="Elegant interior with natural textures" loading="eager" />
                    <div className="hero-image-tag">Spring / Summer 2026</div>
                </div>
                <div className="hero-content">
                    <div className="hero-eyebrow">Curated Living</div>
                    <h1 className="hero-title">The Art of<br /><em>Quiet</em><br />Luxury</h1>
                    <p className="hero-desc">Objects and interiors designed for the way you actually live — unhurried, tactile, and endlessly considered. Images by Unsplash</p>
                    <div className="hero-cta">
                        <a href="#lookbook" className="cta-link">Explore the Collection</a>
                    </div>
                </div>
            </section>
        </>
    )
}