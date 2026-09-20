export default function Hero() {
    return (
        <>
            <section className="canvas-section hero" id="hero">
                <div className="hero-image">
                    <img src="images/protein-yoghurt.png" alt="Protein Yoghurt" loading="eager" />
                    <div className="hero-image-tag">2% Fat · High Protein</div>
                </div>
                <div className="hero-content">
                    <div className="hero-eyebrow">Tradition Meets Protein</div>
                    <h1 className="hero-title">The Art of<br /><em>Making</em><br />Quality Yoghurt</h1>
                    <p className="hero-desc">Traditional Bulgarian yoghurt, made with simple ingredients, authentic taste, and naturally rich in protein.</p>
                    <div className="hero-cta">
                        <a href="#lookbook" className="cta-link">Explore All Recipes</a>
                    </div>
                </div>
            </section>
        </>
    )
}