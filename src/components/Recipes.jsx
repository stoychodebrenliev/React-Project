import RecipeCard from "./RecipeCard.jsx";

export default function Recipes() {
    return (
        <section className="canvas-section recipe-section" id="recipes">
            <div className="recipe-header reveal">
                <h2 className="recipe-title">Recipes</h2>
                <span className="recipe-count">01 — 06</span>
            </div>

            <div className="recipe-track">

                <RecipeCard
                    imageUrl="/images/tarator.webp"
                    alt="Minimalist living room with warm textures"
                    label="Tarator - Traditional Bulgarian Cold Soup"
                />

                <RecipeCard
                    imageUrl="/images/banitsa.jpg"
                    alt="Handcrafted ceramic vases on a wooden shelf"
                    label="Banitsa - Flaky Pastry with Yoghurt and Cheese"
                />

                <RecipeCard
                    imageUrl="/images/bowl.webp"
                    alt="Textile samples with natural fibers and muted colors"
                    label="Berry Protein Bowl - A Healthy and Delicious Breakfast Option"
                />

                <RecipeCard
                    imageUrl="/images/banana.jpg"
                    alt="Craftsperson shaping wood in a sunlit workshop"
                    label="Banana & Cottage Cheese Protein Shake - A Quick and Nutritious Post-Workout Drink"
                />

                <RecipeCard
                    imageUrl="/images/smootie.jpg"
                    alt="Cozy bedroom with layered bedding and soft lighting"
                    label="Fruit Yoghurt Smoothie - A Refreshing and Creamy Beverage"
                />

            </div>

            <div className="recipe-footer reveal">
                <a href="#" className="cta-link recipes-view-all">
                    View All Recipes
                </a>

                <div className="recipe-arrows">
                    <button
                        className="recipe-arrow"
                        id="lbPrev"
                        aria-label="Previous"
                    >
                        <svg viewBox="0 0 24 24">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <button
                        className="recipe-arrow"
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