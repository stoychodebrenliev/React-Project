import RecipeCard from "../components/RecipeCard.jsx";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient.js";

export default function RecipesPage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function getRecipes() {
            const { data, error } = await supabase
            .from("recipes")
            .select("*");

            if (error) {
                console.log(error.message);
                return;
            } 

            console.log(data);
            setRecipes(data);
        };

        getRecipes();
    }, []);

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

                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        imageUrl={recipe.image_url}
                        alt={recipe.title}
                        label={recipe.title}
                    />
                ))}

            </div>
        </main>
    );
}