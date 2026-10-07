import RecipeCard from "./RecipeCard.jsx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import "../styles/Recipes.css";
import { supabase } from "../lib/supabaseClient.js";

export default function Recipes() {
    const trackRef = useRef(null);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function getRecipes() {
            const { data, error } = await supabase
                .from("recipes")
                .select("*")
                .limit(6);

            if (error) {
                console.error("Error fetching recipes:", error);
                return;
            }

            setRecipes(data);
        }

        getRecipes();
    }, []);

    function scrollLeft() {
        trackRef.current.scrollBy({
            left: -500,
            behavior: "smooth",
        });
    }

    function scrollRight() {
        trackRef.current.scrollBy({
            left: 500,
            behavior: "smooth",
        });
    }

    return (
        <section className="canvas-section recipe-section" id="recipes">
            <div className="recipe-header reveal">
                <h2 className="recipe-title">Recipes</h2>
                <span className="recipe-count">01 — 06</span>
            </div>

            <div className="recipe-track" ref={trackRef}>

                {recipes.map((recipe) => (
                    <Link
                        key={recipe.id}
                        to={`/recipes/${recipe.id}`}
                        className="recipe-link"
                        >
                            <RecipeCard
                        imageUrl={recipe.image_url}
                        alt={recipe.title}
                        label={recipe.title}
                    />
                    </Link>
                ))}
            </div>

            <div className="recipe-footer reveal">
                <Link to="/recipes" className="cta-link recipes-view-all">
                    View All Recipes
                </Link>

                <div className="recipe-arrows">
                    <button
                        className="recipe-arrow"
                        id="lbPrev"
                        aria-label="Previous"
                        onClick={scrollLeft}
                    >
                        <svg viewBox="0 0 24 24">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <button
                        className="recipe-arrow"
                        id="lbNext"
                        aria-label="Next"
                        onClick={scrollRight}
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