import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { supabase } from "../lib/supabaseClient.js";
import { Link } from "react-router";
import RecipeCard from "../components/RecipeCard.jsx";
import "../styles/RecipesPage.css";

export default function FavoritesPage() {
    const user = useContext(UserContext);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        async function fetchFavorites() {
            if (!user) {
                setLoading(false);
                return;
            }
            const { data, error } = await supabase
                .from("favorites")
                .select("recipe_id")
                .eq("user_id", user.id);

            if (error) {
                setErrorMessage("Could not load your favorites.");
                setLoading(false);
                return;
            }

            const favoriteRecipeIds = data.map((fav) => fav.recipe_id);

            if (favoriteRecipeIds.length === 0) {
                setFavorites([]);
                setLoading(false);
                return;
            }

            const { data: recipes, error: recipesError } = await supabase
                .from("recipes")
                .select("*")
                .in("id", favoriteRecipeIds);

            if (recipesError) {
                setErrorMessage("Could not load your favorite recipes.");
                setLoading(false);
                return;
            }

            setFavorites(recipes);
            setLoading(false);
        }

        fetchFavorites();
    }, [user]);

    return (
        <main className="recipes-page">
            <div className="recipes-page-header">
                <span className="recipes-page-eyebrow">Saved Recipes</span>
                <h1>My Favorites</h1>
                <p className="recipes-page-description">
                    Here are the recipes you've saved as favorites. Click on a recipe to view its details or remove it from your favorites.
                </p>
            </div>
            {favorites.length === 0 ? (
                <p>You have no favorite recipes yet. Browse our <Link to="/recipes">recipes</Link> and add some!</p>
            ) : (
                <div className="recipes-page-grid">
                    {favorites.map((recipe) => (
                        <Link
                            key={recipe.id}
                            to={`/recipes/${recipe.id}`}
                        >
                            <RecipeCard
                                imageUrl={recipe.image_url}
                                alt={recipe.title}
                                label={recipe.title}
                            />
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
}