export default function Product() {
    return (
        <>
            {/* <!-- SECTION 3: PRODUCT DETAIL --> */}
            <section className="canvas-section product" id="product">
                <div className="product-image-zone" id="productImageZone">
                    <img src="images/ivory-flow-51.jpg" alt="Artisan lounge chair in warm terracotta fabric" loading="lazy" />
                </div>
                <div className="product-info">
                    <div className="product-badge reveal">Signature Piece</div>
                    <h2 className="product-name reveal">The Maren<br />Lounge Chair</h2>
                    <div className="product-price reveal">€2,840</div>
                    <p className="product-desc reveal">Hand-upholstered in Oeko-Tex certified linen over a solid white oak frame. Each piece is numbered and made to order in our Copenhagen atelier.</p>
                    <dl className="product-specs reveal">
                        <div className="product-spec">
                            <dt>Material</dt>
                            <dd>White Oak / Belgian Linen</dd>
                        </div>
                        <div className="product-spec">
                            <dt>Dimensions</dt>
                            <dd>W 78 × D 82 × H 74 cm</dd>
                        </div>
                        <div className="product-spec">
                            <dt>Lead Time</dt>
                            <dd>6 — 8 Weeks</dd>
                        </div>
                        <div className="product-spec">
                            <dt>Origin</dt>
                            <dd>Copenhagen, Denmark</dd>
                        </div>
                    </dl>
                    <div className="product-actions reveal">
                        <a href="#" className="cta-link">Add to Cart — €2,840</a>
                        <a href="#" className="cta-link cta-link--dark">Save to Wishlist</a>
                    </div>
                </div>
            </section>
        </>
    )
}