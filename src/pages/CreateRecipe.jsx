import { useState, useEffect } from "react";
import "../styles/CreateRecipe.css";

export default function CreateRecipe() {

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
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("New Recipe Submitted:", newRecipe);
        // Here you would typically send the new recipe to your backend or database
    }

    return (
        <main className="create-recipe-page">
            <div className="create-recipe-container">
                <h1>Create Recipe</h1>

                <form className="create-recipe-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Recipe Title"
                            value={newRecipe.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            name="description"
                            placeholder="Description"
                            value={newRecipe.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ingredients</label>
                        <textarea
                            name="ingredients"
                            placeholder="Ingredients"
                            value={newRecipe.ingredients}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Instructions</label>
                        <textarea
                            name="instructions"
                            placeholder="Instructions"
                            value={newRecipe.instructions}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Prep Time</label>
                        <input
                            type="text"
                            name="prep_time"
                            placeholder="Prep Time"
                            value={newRecipe.prep_time}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Servings</label>
                        <input
                            type="text"
                            name="servings"
                            placeholder="Servings"
                            value={newRecipe.servings}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Image URL</label>
                        <input
                            type="text"
                            name="image_url"
                            placeholder="Image URL"
                            value={newRecipe.image_url}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Create Recipe</button>

                </form>
            </div>
        </main>
    )
}