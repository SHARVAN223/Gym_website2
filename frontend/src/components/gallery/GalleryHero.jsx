import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GalleryHero = () => {
    const images = [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=90",
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2000&q=90",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2000&q=90",
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
            className="gallery-hero about-hero position-relative min-vh-100 d-flex align-items-center text-white overflow-hidden"
            style={{
                backgroundColor: "#080808",
            }}
        >
            <div
                className="gallery-hero-image about-hero-image"
                style={{ backgroundImage: `url("${images[currentImage]}")` }}
            ></div>

            <div className="gallery-hero-overlay about-hero-overlay"></div>

            <div className="hero-glow"></div>

            <div className="container position-relative py-5">
                <div className="row">
                    <div className="col-lg-8">

                        <div className="hero-content mb-4" key={`badge-${currentImage}`}>
                            <span className="badge bg-danger px-3 py-2 fs-6">
                                POWERFIT GALLERY
                            </span>
                        </div>

                        <h1 className="hero-title about-hero-title display-2 fw-bold mb-4" key={`heading-${currentImage}`}>
                            POWERFIT
                            <br />
                            <span className="text-danger">
                                IN ACTION
                            </span>
                        </h1>

                        <p className="hero-description about-hero-text lead text-light mb-4" key={`text-${currentImage}`}>
                            Explore our gym environment, modern equipment,
                            training sessions, and the PowerFit fitness community.
                        </p>

                        <div className="d-flex flex-wrap gap-3 mt-4" key={`buttons-${currentImage}`}>
                            <Link
                                to="/membership"
                                className="btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill hero-btn about-hero-btn"
                            >
                                Join PowerFit
                                <i className="bi bi-arrow-right ms-2"></i>
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
                        aria-label={`Show Gallery hero image ${index + 1}`}
                        className="border-0 rounded-pill"
                        style={{
                            width: currentImage === index ? "35px" : "10px",
                            height: "8px",
                            backgroundColor: currentImage === index ? "#dc3545" : "white",
                            opacity: currentImage === index ? 1 : 0.5,
                            transition: "all 0.4s ease",
                        }}
                    ></button>
                ))}
            </div>
        </section>


    );
};

export default GalleryHero;
