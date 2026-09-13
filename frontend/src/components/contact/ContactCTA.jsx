
import { Link } from "react-router-dom";

const ContactCTA = () => {
    return (
        <section className="contact-cta-section bg-dark text-white py-5 overflow-hidden">
            <div className="container py-4 py-lg-5">

                <div className="contact-cta-box bg-danger rounded-4 p-4 p-lg-5 text-center shadow-lg">

                    {/* Background Glow */}
                    <div className="contact-cta-glow"></div>

                    <div className="position-relative">

                        <p className="text-uppercase fw-bold mb-2 contact-cta-label">
                            Ready To Get Started?
                        </p>

                        <h2 className="display-5 fw-bold mb-3 contact-cta-title">
                            YOUR STRONGEST
                            <br />
                            JOURNEY STARTS HERE
                        </h2>

                        <p className="lead mb-4 mx-auto contact-cta-text">
                            Take the first step toward a stronger and healthier
                            lifestyle. Explore our membership plans and start today.
                        </p>

                        {/* Buttons */}
                        <div className="d-flex flex-wrap justify-content-center gap-3">

                            <Link
                                to="/membership"
                                className="btn btn-dark btn-lg px-5 py-3 fw-bold contact-cta-primary"
                            >
                                View Membership Plans
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>

                            <Link
                                to="/programs"
                                className="btn btn-outline-light btn-lg px-5 py-3 fw-bold contact-cta-secondary"
                            >
                                Explore Programs
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactCTA;

