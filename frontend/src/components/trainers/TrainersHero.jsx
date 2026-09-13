
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TrainersHero = () => {
    const images = [
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=2000&q=90",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2000&q=90",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=90",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((previousImage) => (previousImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section
            className="trainers-hero about-hero position-relative min-vh-100 d-flex align-items-center text-white overflow-hidden"
            style={{
                backgroundColor: "#080808",
            }}
        >
            <div
                className="trainers-hero-image"
                style={{ backgroundImage: `url("${images[currentImage]}")` }}
            ></div>

            <div className="trainers-hero-overlay"></div>

            {/* Animated Glow */}
            <div className="trainers-hero-glow"></div>

            <div className="container py-5 position-relative">
                <div className="row">
                    <div className="col-lg-9">

                        {/* Label */}
                        <div className="hero-content mb-4" key={`badge-${currentImage}`}>
                            <span className="badge bg-danger px-3 py-2 fs-6">
                                AARAV GYM & FITNESS CLUB
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="trainers-hero-title about-hero-title display-2 fw-bold mb-4" key={`heading-${currentImage}`}>
                            TRAIN WITH
                            <br />
                            <span className="text-danger">
                                THE BEST
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="trainers-hero-text about-hero-text lead text-light mt-4" key={`text-${currentImage}`}>
                            Meet our passionate and experienced trainers who
                            are here to guide, motivate, and support you
                            throughout your fitness journey.
                        </p>

                        {/* Buttons */}
                        <div className="d-flex flex-wrap gap-3 mt-4" key={`buttons-${currentImage}`}>

                            <Link
                                to="/contact"
                                className="btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill trainers-hero-btn about-hero-btn"
                            >
                                Talk To Our Trainers
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>

                            <Link
                                to="/membership"
                                className="btn btn-outline-light btn-lg px-5 py-3 fw-bold rounded-pill trainers-hero-btn"
                            >
                                Join Aarav Gym
                                <i className="bi bi-arrow-up-right ms-2"></i>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>

            <div className="position-absolute bottom-0 inset-s-50 translate-middle-x mb-4 d-flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        aria-label={`Show Trainers hero image ${index + 1}`}
                        className="border-0 rounded-pill"
                        style={{
                            width: currentImage === index ? "35px" : "10px",
                            height: "8px",
                            backgroundColor: currentImage === index ? "#dc3545" : "white",
                            opacity: currentImage === index ? 1 : 0.5,
                            transition: "all 0.4s ease",
                        }}
                    >
                    </button>
                ))}
            </div>
        </section>
    );
};

export default TrainersHero;

