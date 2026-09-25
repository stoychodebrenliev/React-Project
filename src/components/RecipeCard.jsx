export default function RecipeCard(props) {
    return (
        <div className="recipe-card">
            <img
                src={props.imageUrl}
                alt={props.alt}
                loading="lazy"
            />

            <span className="recipe-card-label">
                {props.label}
            </span>
        </div>
    );
}