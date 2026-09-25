import RecipeCard from "../components/RecipeCard.jsx";

export default function RecipesPage() {
    return (
        <main className="recipes-page">
            <div className="recipes-page-header">
                <p className="recipes-page-eyebrow">Discover</p>
                <h1>All Recipes</h1>

                <p className="recipes-page-description">
                    Explore simple and delicious recipes made with yoghurt —
                    from traditional Bulgarian favourites to protein-rich
                    breakfasts and everyday meals.
                </p>
            </div>

            <div className="recipes-page-grid">

                <RecipeCard
                    imageUrl="/images/tarator.webp"
                    alt="Traditional Bulgarian tarator"
                    label="Tarator"
                />

                <RecipeCard
                    imageUrl="/images/banitsa.jpg"
                    alt="Traditional Bulgarian banitsa"
                    label="Banitsa"
                />

                <RecipeCard
                    imageUrl="/images/bowl.webp"
                    alt="Berry protein yoghurt bowl"
                    label="Berry Protein Bowl"
                />

                <RecipeCard
                    imageUrl="/images/banana.jpg"
                    alt="Banana and cottage cheese protein shake"
                    label="Banana & Cottage Cheese Protein Shake"
                />

                <RecipeCard
                    imageUrl="/images/smootie.jpg"
                    alt="Fruit yoghurt smoothie"
                    label="Fruit Yoghurt Smoothie"
                />

                <RecipeCard
                    imageUrl="/images/pancakes.jpg"
                    alt="Yoghurt pancakes"
                    label="Yoghurt Pancakes"
                />

            </div>
        </main>
    );
}