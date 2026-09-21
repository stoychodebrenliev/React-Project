export default function Process() {
    return (
        <>
            {/* <!-- SECTION 4: THE PROCESS --> */}
            <section className="canvas-section process" id="process">
                <div className="process-inner">
                    <div className="process-left">
                        <h2 className="process-title reveal">How each cup<br />comes to life</h2>
                        <p className="process-subtitle reveal">From fresh milk to a delicious, protein-rich yoghurt — carefully crafted at every step.</p>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item" data-timeline>
                            <div className="timeline-step">Step 1</div>
                            <h3 className="timeline-heading">Source</h3>
                            <p className="timeline-text">We begin with carefully selected Bulgarian cow’s milk as the foundation of every cup.</p>
                        </div>
                        <div className="timeline-item" data-timeline>
                            <div className="timeline-step">Step 2</div>
                            <h3 className="timeline-heading">Refine</h3>
                            <p className="timeline-text">The recipe is carefully balanced with dairy technologists to achieve the right taste, texture and nutritional profile.</p>
                        </div>
                        <div className="timeline-item" data-timeline>
                            <div className="timeline-step">Step 3</div>
                            <h3 className="timeline-heading">Ferment</h3>
                            <p className="timeline-text">The yoghurt is fermented with selected cultures, allowing its characteristic flavour and creamy texture to develop naturally.</p>
                        </div>
                        <div className="timeline-item" data-timeline>
                            <div className="timeline-step">Step 4</div>
                            <h3 className="timeline-heading">Fill & Chill</h3>
                            <p className="timeline-text">Once fermentation is complete, the yoghurt is cooled and filled into each cup, ready to be enjoyed.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}