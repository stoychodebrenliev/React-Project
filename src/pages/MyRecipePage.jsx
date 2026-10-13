import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { supabase } from "../lib/supabaseClient"
import RecipeCard from "../components/RecipeCard";

export default function MyRecipePage() {
    const { userId } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        async function getMyRecipes() {
            const { data, error } = await supabase
                .from("recipes")
                .select("*")
                .eq("user_id", userId);

            if (error) {
                setErrorMessage("Could not load recipes.");
                setLoading(false);
                return;
            }

            setRecipes(data);
            setLoading(false);
        }

        getMyRecipes();
    }, [userId]);

    if(loading) {
        return <p>Loading...</p>
    }

    if(errorMessage) {
        return <p>{errorMessage}</p>
    }

    return (
        <main className="recipes-page">
            <div className="recipes-page-header">
                <h1>My Recipes</h1>
            </div>
            {recipes.length === 0 ? (
                <p>You haven't created any recipes yet.</p>
            ) : (
             <div className="recipes-page-grid">

                {recipes.map((recipe) => (
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
    