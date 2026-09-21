export default function Product() {
    return (
        <>
            {/* <!-- SECTION 3: PRODUCT DETAIL --> */}
            <section className="canvas-section product" id="product">
                <div className="product-image-zone" id="productImageZone">
                    <img src="images/eating.png" alt="Woman eating yoghurt" loading="lazy" />
                </div>
                <div className="product-info">
                    <div className="product-badge reveal">The Bulgarian Way</div>
                    <h2 className="product-name reveal">NIKA</h2>
                    <div className="product-price reveal">Price: Soon to be determined</div>
                    <p className="product-desc reveal">Made from Bulgarian cow’s milk and developed together with experienced dairy technologists, the recipe combines traditional Bulgarian yoghurt-making with a modern focus on high-protein nutrition. Carefully refined for taste, texture, and nutritional value, it delivers 10g of protein per 100g while preserving the authentic character of Bulgarian yoghurt.</p>
                    <dl className="product-specs reveal">
                        <div className="product-spec">
                            <dt>Protein</dt>
                            <dd>10g/100g</dd>
                        </div>
                        <div className="product-spec">
                            <dt>Fat</dt>
                            <dd>2%</dd>
                        </div>
                        <div className="product-spec">
                            <dt>Milk</dt>
                            <dd>Bulgarian Cow's Milk</dd>
                        </div>
                        <div className="product-spec">
                            <dt>Origin</dt>
                            <dd>Bulgaria</dd>
                        </div>
                    </dl>
                    <div className="product-actions reveal">
                        <a href="#" className="cta-link">OUR YOGHURT</a>
                        <a href="#" className="cta-link cta-link--dark">Save to Wishlist</a>
                    </div>
                </div>
            </section>
        </>
    )
}