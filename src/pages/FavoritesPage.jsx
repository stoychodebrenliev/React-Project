import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { supabase } from "../lib/supabaseClient.js";
import { Link } from "react-router";
import RecipeCard from "../components/RecipeCard.jsx";

export default function FavoritesPage() {
    const user = useContext(UserContext);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        async function fetchFavorites() {
            if (user) {
                const { data } = await supabase
                    .from("favorites")
                    .select("recipe_id")
                    .eq("user_id", user.id);

                const favoriteRecipeIds = data.map((fav) => fav.recipe_id);

                if (favoriteRecipeIds.length === 0) {
                    setFavorites([]);
                    return;
                }

                const { data: recipes } = await supabase
                    .from("recipes")
                    .select("*")
                    .in("id", favoriteRecipeIds);

                setFavorites(recipes);
            }
        }

        fetchFavorites();
    }, [user]);

    return (
        <div>
            <h1>My Favorites</h1>
            {favorites.length === 0 ? (
                <p>You have no favorite recipes yet. Browse our <Link to="/recipes">recipes</Link> and add some!</p>
            ) : (
                <div>
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
        </div>
    );
}