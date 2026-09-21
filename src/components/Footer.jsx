export default function Footer() {
    return (
        <>
            {/* <!-- SECTION 6: THE SIGNATURE --> */}
            <section className="canvas-section signature" id="signature">
                <div className="signature-bg-logo" aria-hidden="true">NIKA</div>
                <div className="signature-content reveal">
                    <div className="signature-mark">Nika - Bulgarian Joghurt</div>
                    <h2 className="signature-heading">We create a product worth trying</h2>
                    {/* <p className="signature-text">Whether it's a single chair or an entire interior — we'd love to hear what you're imagining. Consultations are always complimentary.</p> */}
                    <a href="mailto:hello@ivoryflow.studio" className="signature-email">hello@nika.com</a>
                    <div className="signature-phone">+45 32 17 88 00</div>
                    {/* <div className="signature-links">
                        <a href="#" className="cta-link">Instagram</a>
                        <a href="#" className="cta-link">Pinterest</a>
                        <a href="#" className="cta-link">Journal</a>
                    </div> */}
                </div>
                <div className="signature-footer">
                    <a href="https://www.tooplate.com" target="_blank" rel="nofollow">Free HTML Template</a> 
                </div>
            </section>
        </>
    )
}