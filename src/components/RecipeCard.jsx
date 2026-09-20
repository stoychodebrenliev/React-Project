export default function RecipeCard(props) {
    return (
        <div className="lookbook-card">
            <img
                src={props.imageUrl}
                alt={props.alt}
                loading="lazy"
            />

            <span className="lookbook-card-label">
                {props.label}
            </span>
        </div>
    );
}