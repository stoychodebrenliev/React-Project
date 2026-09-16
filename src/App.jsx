function App() {
	return (
		<div>
			{/* <!-- ═══════ EST. 2026 DECORATOR ═══════ --> */}
			<div className="est-label" aria-hidden="true">Est. 2026</div>

			{/* <!-- ═══════ FLOATING PILL NAV ═══════ --> */}
			<nav className="pill-nav" aria-label="Main Navigation">
				<a href="#hero" className="active">Home</a>
				<a href="#lookbook">Lookbook</a>
				<a href="#product">Shop</a>
				<a href="#process">Process</a>
				<a href="#video">Story</a>
				<a href="#signature">Contact</a>
			</nav>

			{/* <!-- ═══════ MOBILE ═══════ --> */}
			<button className="hamburger" aria-label="Toggle Navigation"><span></span><span></span><span></span></button>
			<nav className="mobile-nav" aria-label="Mobile Navigation">
				<a href="#hero">Home</a>
				<a href="#lookbook">Lookbook</a>
				<a href="#product">Shop</a>
				<a href="#process">Process</a>
				<a href="#video">Story</a>
				<a href="#signature">Contact</a>
			</nav>

			{/* <!-- ═══════ MOUSE-FOLLOWING BUY CIRCLE ═══════ --> */}
			<div className="buy-circle" id="buyCircle"><span>Add to Cart</span></div>

			{/* <!-- ═══════ THE CANVAS ═══════ --> */}
			<main>

				{/* <!-- SECTION 1: HERO --> */}
				<section className="canvas-section hero" id="hero">
					<div className="hero-image">
						<img src="images/ivory-flow-01.jpg" alt="Elegant interior with natural textures" loading="eager"/>
							<div className="hero-image-tag">Spring / Summer 2026</div>
					</div>
					<div className="hero-content">
						<div className="hero-eyebrow">Curated Living</div>
						<h1 className="hero-title">The Art of<br /><em>Quiet</em><br />Luxury</h1>
							<p className="hero-desc">Objects and interiors designed for the way you actually live — unhurried, tactile, and endlessly considered. Images by Unsplash</p>
							<div className="hero-cta">
								<a href="#lookbook" className="cta-link">Explore the Collection</a>
							</div>
						</div>
						</section>

						{/* <!-- SECTION 2: THE LOOKBOOK --> */}
						<section className="canvas-section lookbook" id="lookbook">
							<div className="lookbook-header reveal">
								<h2 className="lookbook-title">The Lookbook</h2>
								<span className="lookbook-count">01 — 06</span>
							</div>
							<div className="lookbook-track">
								<div className="lookbook-card">
									<img src="images/ivory-flow-11.jpg" alt="Minimalist living room with warm textures" loading="lazy"/>
										<span className="lookbook-card-label">No. 01 — Living</span>
								</div>
								<div className="lookbook-card">
									<img src="images/ivory-flow-12.jpg" alt="Artisan ceramic collection" loading="lazy"/>
										<span className="lookbook-card-label">No. 02 — Ceramics</span>
								</div>
								<div className="lookbook-card">
									<img src="images/ivory-flow-13.jpg" alt="Natural linen textiles draped on chair" loading="lazy"/>
										<span className="lookbook-card-label">No. 03 — Textiles</span>
								</div>
								<div className="lookbook-card">
									<img src="images/ivory-flow-14.jpg" alt="Handcrafted wooden furniture" loading="lazy"/>
										<span className="lookbook-card-label">No. 04 — Craft</span>
								</div>
								<div className="lookbook-card">
									<img src="images/ivory-flow-15.jpg" alt="Serene bedroom interior" loading="lazy"/>
										<span className="lookbook-card-label">No. 05 — Bedroom</span>
								</div>
								<div className="lookbook-card">
									<img src="images/ivory-flow-16.jpg" alt="Architectural detail with light" loading="lazy"/>
										<span className="lookbook-card-label">No. 06 — Light</span>
								</div>
							</div>
							<div className="lookbook-footer reveal">
								<a href="#" className="cta-link">View Full Lookbook</a>
								<div className="lookbook-arrows">
									<button className="lookbook-arrow" id="lbPrev" aria-label="Previous">
										<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
									</button>
									<button className="lookbook-arrow" id="lbNext" aria-label="Next">
										<svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18" /></svg>
									</button>
								</div>
							</div>
						</section>

						{/* <!-- SECTION 3: PRODUCT DETAIL --> */}
						<section className="canvas-section product" id="product">
							<div className="product-image-zone" id="productImageZone">
								<img src="images/ivory-flow-51.jpg" alt="Artisan lounge chair in warm terracotta fabric" loading="lazy"/>
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

						{/* <!-- SECTION 4: THE PROCESS --> */}
						<section className="canvas-section process" id="process">
							<div className="process-inner">
								<div className="process-left">
									<h2 className="process-title reveal">How each piece<br />comes to life</h2>
									<p className="process-subtitle reveal">From raw material to your home — a journey of intention at every step.</p>
								</div>
								<div className="timeline">
									<div className="timeline-item" data-timeline>
										<div className="timeline-step">Step 01</div>
										<h3 className="timeline-heading">Source</h3>
										<p className="timeline-text">We begin with materials — FSC-certified hardwoods from managed Scandinavian forests, linens woven in Flanders, and leathers tanned with chestnut bark.</p>
									</div>
									<div className="timeline-item" data-timeline>
										<div className="timeline-step">Step 02</div>
										<h3 className="timeline-heading">Design</h3>
										<p className="timeline-text">Every piece starts as a 1:1 clay or foam maquette. We test proportions physically before a single line is drawn digitally.</p>
									</div>
									<div className="timeline-item" data-timeline>
										<div className="timeline-step">Step 03</div>
										<h3 className="timeline-heading">Craft</h3>
										<p className="timeline-text">Our Copenhagen atelier employs traditional joinery — no screws in the frame, no staples in the upholstery. Hand-tied eight-way springs for the seat.</p>
									</div>
									<div className="timeline-item" data-timeline>
										<div className="timeline-step">Step 04</div>
										<h3 className="timeline-heading">Deliver</h3>
										<p className="timeline-text">White-glove delivery with in-home placement. Each piece arrives in reusable linen wrapping, not cardboard. We take the packaging back.</p>
									</div>
								</div>
							</div>
						</section>

						{/* <!-- SECTION 5: VIDEO FRAGMENT --> */}
						<section className="canvas-section video-fragment" id="video">
							<div className="video-bg">
								<img src="images/ivory-flow-61.jpg" alt="Sunlit workshop with craftsperson at work" loading="lazy"/>
							</div>
							<div className="grain-overlay"></div>
							<div className="video-content reveal">
								<div className="video-play">
									<svg viewBox="0 0 24 24"><polygon points="8,5 20,12 8,19" /></svg>
								</div>
								<h2 className="video-title">The Quiet<br />Studio Film</h2>
								<p className="video-caption">A slow meditation on making — 4 minutes inside our Copenhagen workshop, filmed over 12 months.</p>
								<a href="#" className="cta-link cta-link--light">Watch the Film</a>
							</div>
						</section>

						{/* <!-- SECTION 6: THE SIGNATURE --> */}
						<section className="canvas-section signature" id="signature">
							<div className="signature-bg-logo" aria-hidden="true">Ivory Flow</div>
							<div className="signature-content reveal">
								<div className="signature-mark">The Ivory Flow</div>
								<h2 className="signature-heading">Let's create<br />something enduring</h2>
								<p className="signature-text">Whether it's a single chair or an entire interior — we'd love to hear what you're imagining. Consultations are always complimentary.</p>
								<a href="mailto:hello@ivoryflow.studio" className="signature-email">hello@ivoryflow.studio</a>
								<div className="signature-phone">+45 32 17 88 00</div>
								<div className="signature-links">
									<a href="#" className="cta-link">Instagram</a>
									<a href="#" className="cta-link">Pinterest</a>
									<a href="#" className="cta-link">Journal</a>
								</div>
							</div>
							<div className="signature-footer">
								<a href="https://www.tooplate.com" target="_blank" rel="nofollow">Free HTML Template</a> by Tooplate &middot; The Ivory Flow
							</div>
						</section>
					</main>
				</div>
		)
}

export default App
