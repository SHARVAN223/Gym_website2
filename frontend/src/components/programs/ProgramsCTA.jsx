
import { Link } from "react-router-dom";

const ProgramsCTA = () => {
    return (
        <section className="bg-dark text-white py-5 overflow-hidden">
            <div className="container py-4 py-lg-5">

                <div className="program-cta bg-danger rounded-4 p-4 p-lg-5 text-center shadow-lg">

                    {/* Small Label */}
                    <p className="cta-label text-uppercase fw-bold mb-2">
                        Ready To Start?
                    </p>

                    {/* Heading */}
                    <h2 className="cta-title display-5 fw-bold mb-3">
                        YOUR FITNESS JOURNEY
                        <br />
                        STARTS TODAY
                    </h2>

                    {/* Description */}
                    <p
                        className="cta-text lead mb-4 mx-auto"
                        style={{ maxWidth: "700px" }}
                    >
                        Choose the program that matches your goals and start
                        building a stronger, healthier version of yourself.
                    </p>

                    {/* Buttons */}
                    <div className="d-flex flex-wrap justify-content-center gap-3">

                        <Link
                            to="/membership"
                            className="btn btn-dark btn-lg px-5 py-3 fw-bold cta-btn"
                        >
                            View Membership Plans
                            <i className="bi bi-arrow-right ms-2"></i>
                        </Link>

                        <Link
                            to="/contact"
                            className="btn btn-outline-light btn-lg px-5 py-3 fw-bold cta-btn"
                        >
                            Contact Us
                            <i className="bi bi-chat-dots ms-2"></i>
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProgramsCTA;

