import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router";
import "../styles/CreateRecipe.css";

export default function CreateRecipe() {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [newRecipe, setNewRecipe] = useState({
        title: "",
        description: "",
        ingredients: "",
        instructions: "",
        prep_time: "",
        servings: "",
        image_url: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setNewRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ""
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const newErrors = {};

        if (!newRecipe.title.trim()) {
            newErrors.title = "Please enter a title for your recipe.";
        }
        if (!newRecipe.description.trim()) {
            newErrors.description = "Please enter a description for your recipe.";
        }
        if (!newRecipe.ingredients.trim()) {
            newErrors.ingredients = "Please enter ingredients for your recipe.";
        }
        if (!newRecipe.instructions.trim()) {
            newErrors.instructions = "Please enter instructions for your recipe.";
        }
        if (Number(newRecipe.prep_time <= 0)) {
            newErrors.prep_time = "Please enter a valid prep time for your recipe.";
        }
        if (Number(newRecipe.servings <= 0)) {
            newErrors.servings = "Please enter a valid number of servings for your recipe.";
        }
        if (!newRecipe.image_url.trim()) {
            newErrors.image_url = "Please enter an image URL for your recipe.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        if (!user) {
            return;
        }
        const { data, error } = await supabase
            .from("recipes")
            .insert(
                {
                    ...newRecipe,
                    prep_time: Number(newRecipe.prep_time),
                    servings: Number(newRecipe.servings),
                    user_id: user.id
                })
            .select()
            .single();

        if (error) {
            console.error("Error creating recipe:", error);
            return;
        }

        navigate(`/recipes/${data.id}`);
    }

    return (
        <main className="create-recipe-page">
            <div className="create-recipe-container">
                <h1>Create Recipe</h1>

                <form className="create-recipe-form" onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className={errors.title ? "error-label" : ""}>Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Recipe Title"
                            value={newRecipe.title}
                            onChange={handleChange}
                            className={errors.title ? "error-input" : ""}
                        />
                        {errors.title && (
                            <span className="field-error">{errors.title}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label className={errors.description ? "error-label" : ""}>Description</label>
                        <textarea
                            name="description"
                            placeholder="Description"
                            value={newRecipe.description}
                            onChange={handleChange}
                            className={errors.description ? "error-input" : ""}
                        />
                        {errors.description && (
                            <span className="field-error">{errors.description}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label className={errors.ingredients ? "error-label" : ""}>Ingredients</label>
                        <textarea
                            name="ingredients"
                            placeholder="Ingredients"
                            value={newRecipe.ingredients}
                            onChange={handleChange}
                            className={errors.ingredients ? "error-input" : ""}
                        />
                        {errors.ingredients && (
                            <span className="field-error">{errors.ingredients}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label className={errors.instructions ? "error-label" : ""}>Instructions</label>
                        <textarea
                            name="instructions"
                            placeholder="Instructions"
                            value={newRecipe.instructions}
                            onChange={handleChange}
                            className={errors.instructions ? "error-input" : ""}
                        />
                        {errors.instructions && (
                            <span className="field-error">{errors.instructions}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label className={errors.prep_time ? "error-label" : ""}>Prep Time</label>
                        <input
                            type="text"
                            name="prep_time"
                            placeholder="Prep Time"
                            value={newRecipe.prep_time}
                            onChange={handleChange}
                            className={errors.prep_time ? "error-input" : ""}
                        />
                        {errors.prep_time && (
                            <span className="field-error">{errors.prep_time}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label className={errors.servings ? "error-label" : ""}>Servings</label>
                        <input
                            type="text"
                            name="servings"
                            placeholder="Servings"
                            value={newRecipe.servings}
                            onChange={handleChange}
                            className={errors.servings ? "error-input" : ""}
                        />
                        {errors.servings && (
                            <span className="field-error">{errors.servings}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label className={errors.image_url ? "error-label" : ""}>Image URL</label>
                        <input
                            type="text"
                            name="image_url"
                            placeholder="Image URL"
                            value={newRecipe.image_url}
                            onChange={handleChange}
                            className={errors.image_url ? "error-input" : ""}
                        />
                        {errors.image_url && (
                            <span className="field-error">{errors.image_url}</span>
                        )}
                    </div>
                    <button type="submit">Create Recipe</button>

                </form>
            </div>
        </main>
    )
}