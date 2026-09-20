import RecipeCard from "./RecipeCard.jsx";

export default function Recipes() {
    return (
        <section className="canvas-section lookbook" id="recipes">
            <div className="lookbook-header reveal">
                <h2 className="lookbook-title">Recipes</h2>
                <span className="lookbook-count">01 — 06</span>
            </div>

            <div className="lookbook-track">

                <RecipeCard
                    imageUrl="/images/ivory-flow-11.jpg"
                    alt="Minimalist living room with warm textures"
                    label="No. 01 — Living"
                />

                <RecipeCard
                    imageUrl="/images/ivory-flow-12.jpg"
                    alt="Handcrafted ceramic vases on a wooden shelf"
                    label="No. 02 — Ceramics"
                />

                <RecipeCard
                    imageUrl="/images/ivory-flow-13.jpg"
                    alt="Textile samples with natural fibers and muted colors"
                    label="No. 03 — Textiles"
                />

                <RecipeCard
                    imageUrl="/images/ivory-flow-14.jpg"
                    alt="Craftsperson shaping wood in a sunlit workshop"
                    label="No. 04 — Craft"
                />

                <RecipeCard
                    imageUrl="/images/ivory-flow-15.jpg"
                    alt="Cozy bedroom with layered bedding and soft lighting"
                    label="No. 05 — Bedroom"
                />

                <RecipeCard
                    imageUrl="/images/ivory-flow-16.jpg"
                    alt="Elegant dining area with natural wood and neutral tones"
                    label="No. 06 — Light"
                />

            </div>

            <div className="lookbook-footer reveal">
                <a href="#" className="cta-link">
                    View All Recipes
                </a>

                <div className="lookbook-arrows">
                    <button
                        className="lookbook-arrow"
                        id="lbPrev"
                        aria-label="Previous"
                    >
                        <svg viewBox="0 0 24 24">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <button
                        className="lookbook-arrow"
                        id="lbNext"
                        aria-label="Next"
                    >
                        <svg viewBox="0 0 24 24">
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}