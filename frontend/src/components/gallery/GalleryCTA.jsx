
import { Link } from "react-router-dom";

const GalleryCTA = () => {
    return (
        <section className="gallery-cta-section bg-dark text-white py-5 overflow-hidden">
            <div className="container py-4 py-lg-5">

                <div className="gallery-cta-box bg-danger rounded-4 p-4 p-lg-5 text-center shadow-lg">

                    {/* Background Glow */}
                    <div className="gallery-cta-glow"></div>

                    <div className="position-relative">

                        <p className="text-uppercase fw-bold mb-2 gallery-cta-label">
                            Ready To Start?
                        </p>

                        <h2 className="display-5 fw-bold mb-3 gallery-cta-title">
                            COME TRAIN
                            <br />
                            WITH US
                        </h2>

                        <p className="lead mb-4 mx-auto gallery-cta-text">
                            Visit PowerFit and experience a motivating environment,
                            professional training, and everything you need to achieve
                            your fitness goals.
                        </p>

                        {/* Buttons */}
                        <div className="d-flex flex-wrap justify-content-center gap-3">

                            <Link
                                to="/membership"
                                className="btn btn-dark btn-lg px-5 py-3 fw-bold gallery-cta-primary"
                            >
                                Join PowerFit
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>

                            <Link
                                to="/contact"
                                className="btn btn-outline-light btn-lg px-5 py-3 fw-bold gallery-cta-secondary"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default GalleryCTA;

