export default function BrandStory() {
    return (
        <>
            {/* <!-- SECTION 5: VIDEO FRAGMENT --> */}
            <section className="canvas-section video-fragment" id="video">
                <div className="video-bg">
                    <img src="images/ivory-flow-61.jpg" alt="Sunlit workshop with craftsperson at work" loading="lazy" />
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
        </>
    )
}