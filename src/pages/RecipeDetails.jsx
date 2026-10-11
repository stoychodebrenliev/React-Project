import { useEffect, useState, useContext } from "react";
import { supabase } from "../lib/supabaseClient.js";
import { useParams, useNavigate } from "react-router";
import "../styles/RecipeDetails.css";
import { UserContext } from "../context/UserContext.jsx";

export default function RecipeDetails() {
    const user = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [popUp, setPopUp] = useState(false);
    const [editRecipe, setEditRecipe] = useState({
        title: "",
        description: "",
        ingredients: "",
        instructions: "",
        prep_time: "",
        servings: "",
        image_url: ""
    });
    const [favoriteId, setFavoriteId] = useState(null);

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

    useEffect(() => {
        async function checkFavorite() {
            if (!user || !recipe) {
                setFavoriteId(null);
                return;
            }

            const { data, error } = await supabase
                .from("favorites")
                .select("id")
                .eq("user_id", user.id)
                .eq("recipe_id", id)
                .maybeSingle();

            if (error) {
                console.log("Could not check favorite status:", error);
                return;
            }

            setFavoriteId(data?.id ?? null);
        }

        checkFavorite();
    }, [user, recipe]);

    async function handleFavorite() {
        if (!user) {
            setErrorMessage("You must be logged in to favorite a recipe.");
            return;
        }

        const { data, error } = await supabase
            .from("favorites")
            .insert({ user_id: user.id, recipe_id: recipe.id })
            .select()
            .single();

        if (error) {
            console.log("Could not add to favorites:", error);
            return;
        }

        setFavoriteId(data.id);
    }

    async function handleUnfavorite() {
        const {error} = await supabase
        .from("favorites")
        .delete()
        .eq("id", favoriteId);

    if(error) {
        console.log("Could not remove from favorites:", error);
        return;
    } 

    setFavoriteId(null);
}

    async function handleDelete() {
        const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");

        if (!confirmDelete) {
            return;
        }

        const { error } = await supabase
            .from("recipes")
            .delete()
            .eq("id", id);

        if (error) {
            setErrorMessage("Could not delete this recipe.");
            return;
        }

        navigate("/recipes");
    }

    if (errorMessage) {
        return <p> {errorMessage} </p>
    }

    if (!recipe) {
        return <p> Loading... </p>
    }

    async function handleUpdate(e) {
        e.preventDefault();

        const { data, error } = await supabase
            .from("recipes")
            .update(editRecipe)
            .eq("id", id)
            .select()
            .single();

        if (error) {
            setErrorMessage("Could not update this recipe.");
            return;
        }

        setRecipe(data);
        setPopUp(false);
    }

    function openEditPopUp() {
        setEditRecipe({
            title: recipe.title,
            description: recipe.description,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            prep_time: recipe.prep_time,
            servings: recipe.servings,
            image_url: recipe.image_url
        });
        setPopUp(true);
    }

    function handleEditChange(e) {
        const { name, value } = e.target;
        setEditRecipe((prev) => ({
            ...prev,
            [name]: value
        }));
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
                        {user && user.id === recipe.user_id && (
                            <>

                                <button className="recipe-action-btn edit" onClick={openEditPopUp}>
                                    Edit
                                </button>
                                <button className="recipe-action-btn delete" onClick={handleDelete}>
                                    Delete
                                </button>
                            </>
                        )}
                        
                        {favoriteId ? (
                            <button className="recipe-action-btn favorite" onClick={handleUnfavorite}>
                                Remove from Favorites
                            </button>
                        ) : (
                            <button className="recipe-action-btn favorite" onClick={handleFavorite}>
                                Add to Favorites
                            </button>
                        )}
                    </div>

                </div>



                <h2>Description</h2>
                <p>{recipe.description}</p>

                <h2>Ingredients</h2>
                <p className="recipe-list">{recipe.ingredients}</p>

                <h2>Instructions</h2>
                <p className="recipe-list">{recipe.instructions}</p>

            </div>
            {popUp && (
                <div className="edit-modal">
                    <div className="edit-modal-content">
                        <h2>Edit Recipe</h2>

                        <form onSubmit={handleUpdate}>
                            <label htmlFor="edit-title">Title</label>
                            <input
                                type="text"
                                id="edit-title"
                                name="title"
                                value={editRecipe.title}
                                onChange={handleEditChange}
                            />

                            <label htmlFor="edit-description">Description</label>
                            <textarea
                                id="edit-description"
                                name="description"
                                value={editRecipe.description}
                                onChange={handleEditChange}
                            />

                            <label htmlFor="edit-ingredients">Ingredients</label>
                            <textarea
                                id="edit-ingredients"
                                name="ingredients"
                                value={editRecipe.ingredients}
                                onChange={handleEditChange}
                            />

                            <label htmlFor="edit-instructions">Instructions</label>
                            <textarea
                                id="edit-instructions"
                                name="instructions"
                                value={editRecipe.instructions}
                                onChange={handleEditChange}
                            />

                            <label htmlFor="edit-prep-time">Prep Time (minutes)</label>
                            <input
                                type="number"
                                id="edit-prep-time"
                                name="prep_time"
                                value={editRecipe.prep_time}
                                onChange={handleEditChange}
                            />

                            <label htmlFor="edit-servings">Servings</label>
                            <input
                                type="number"
                                id="edit-servings"
                                name="servings"
                                value={editRecipe.servings}
                                onChange={handleEditChange}
                            />

                            <label htmlFor="edit-image-url">Image URL</label>
                            <input
                                type="text"
                                id="edit-image-url"
                                name="image_url"
                                value={editRecipe.image_url}
                                onChange={handleEditChange}
                            />

                            <button type="button" onClick={() => setPopUp(false)}>
                                Close
                            </button>
                            <button type="submit">Save</button>
                        </form>


                    </div>
                </div>
            )}
        </main>
    );
}