import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient.js";
import { useParams } from "react-router";

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

        if(!recipe) {
            return <p> Loading... </p>
        }
    return (
        <main className="recipe-details">
            <img
            src={recipe.image_url} 
            alt={recipe.title} 
            />

            <h1>{recipe.title}</h1>

            <p>{recipe.description}</p>
            
        </main>
    );
}