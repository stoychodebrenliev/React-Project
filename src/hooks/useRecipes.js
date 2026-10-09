import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient.js";

export default function useRecipes(limit) {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getRecipes() {
            let query = supabase
                .from("recipes")
                .select("*");

            if (limit) {
                query = query.limit(limit);
            }

            const { data, error: queryError } = await query;

            if (queryError) {
                setError(queryError);
            } else {
                setRecipes(data);
            }
        }

            getRecipes();

        }, [limit]);

    return { recipes, error };
}