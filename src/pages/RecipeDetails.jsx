import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient.js";
import { useParams } from "react-router";
import "../styles/RecipeDetails.css";

export default function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        async function getRecipe() {
            const { data, error } = await supabase
                .from("recipes")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                setErrorMessage("Could not load this recipe.");
                return;
            }

            setRecipe(data);
        }

        getRecipe();
    }, [id]);

    if (errorMessage) {
        return <p> {errorMessage} </p>
    }

    if (!recipe) {
        return <p> Loading... </p>
    }
    return (
        <main className="recipe-details">
            <div className="recipe-details-image">
                <img
                    src={recipe.image_url}
                    alt={recipe.title}
                />
            </div>

            <div className="recipe-details-content">
                <div className="recipe-top">

                    <div>
                        <h1>{recipe.title}</h1>

                        <div className="recipe-meta">
                            <div>
                                <span className="recipe-meta-label">Prep Time</span>
                                <span className="recipe-meta-value">
                                    {recipe.prep_time} min
                                </span>
                            </div>

                            <div>
                                <span className="recipe-meta-label">Servings</span>
                                <span className="recipe-meta-value">
                                    {recipe.servings}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="recipe-actions">
                        <button className="recipe-action-btn edit">Edit</button>
                        <button className="recipe-action-btn delete">Delete</button>
                        <button className="recipe-action-btn favorite">Add to Favorites</button>
                    </div>

                </div>



                <h2>Description</h2>
                <p>{recipe.description}</p>

                <h2>Ingredients</h2>
                <p className="recipe-list">{recipe.ingredients}</p>

                <h2>Instructions</h2>
                <p className="recipe-list">{recipe.instructions}</p>

            </div>
        </main>
    );
}