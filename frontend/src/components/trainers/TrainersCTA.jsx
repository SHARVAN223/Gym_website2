
import { Link } from "react-router-dom";

const TrainersCTA = () => {
    return (
        <section
            className="about-hero position-relative min-vh-100 d-flex align-items-center text-white overflow-hidden"
            style={{
                backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.25) 100%), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=90')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container py-4 py-lg-5">

                <div
                    className="p-4 p-lg-5 text-start
                    transition duration-500
                    hover:-translate-y-1"
                >

                    {/* Small Heading */}
                    <p className="about-hero-subtitle text-danger text-uppercase fw-bold mb-3 tracking-wide">
                        Train With Confidence
                    </p>

                    {/* Main Heading */}
                    <h2 className="about-hero-title display-2 fw-bold mb-3">
                        GET EXPERT GUIDANCE
                        <br />
                        FOR YOUR FITNESS GOALS
                    </h2>

                    {/* Description */}
                    <p
                        className="about-hero-text lead mb-4"
                        style={{ maxWidth: "700px" }}
                    >
                        Our trainers are ready to help you stay motivated,
                        train correctly, and achieve better results.
                    </p>

                    {/* Buttons */}
                    <div className="d-flex flex-wrap gap-3">

                        <Link
                            to="/contact"
                            className="btn btn-dark btn-lg px-5 py-3 fw-bold rounded-pill
                            transition duration-300
                            hover:scale-105"
                        >
                            Contact Our Trainers
                            <i className="bi bi-arrow-right ms-2"></i>
                        </Link>

                        <Link
                            to="/membership"
                            className="btn btn-outline-light btn-lg px-5 py-3 fw-bold rounded-pill
                            transition duration-300
                            hover:scale-105"
                        >
                            Join Aarav Gym
                            <i className="bi bi-arrow-right ms-2"></i>
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default TrainersCTA;
