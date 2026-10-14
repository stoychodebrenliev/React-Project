import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient.js";

export default function useRecipes(limit) {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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
                setLoading(false);
            } else {
                setRecipes(data);
                setLoading(false);
            }
        }

            getRecipes();

        }, [limit]);

    return { recipes, error, loading };
}