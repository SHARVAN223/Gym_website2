import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=2000&q=90",
     "https://images.unsplash.com/photo-1649789248266-ef1c7f744f6f?auto=format&fit=crop&w=2000&q=90",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="hero-section position-relative min-vh-100 d-flex align-items-center text-white overflow-hidden"
      style={{
        backgroundImage: `
        linear-gradient(
            90deg,
            rgba(0,0,0,0.94) 0%,
            rgba(0,0,0,0.72) 45%,
            rgba(0,0,0,0.25) 100%
        ),
        url("${images[currentImage]}")
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >

      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.35), transparent)",
          pointerEvents: "none",
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative py-5">
        <div className="row">
          <div className="col-lg-8">

            {/* Badge */}
            <div
              className="hero-content mb-4"
              key={`badge-${currentImage}`}
            >
              <span className="badge bg-danger px-3 py-2 fs-6">
                🔥 TRANSFORM YOUR BODY
              </span>
            </div>

            {/* Heading */}
            <h1
              className="display-2 fw-bold hero-content"
              key={`heading-${currentImage}`}
            >
              BUILD YOUR
              <br />
              <span className="text-danger">
                STRONGEST SELF
              </span>
            </h1>

            {/* Description */}
            <p
              className="lead mt-4 text-light hero-content"
              key={`text-${currentImage}`}
            >
              Train harder, get stronger, and transform your
              lifestyle with expert trainers and modern equipment.
            </p>

            {/* Buttons */}
            <div
              className="d-flex flex-wrap gap-3 mt-4 hero-content"
              key={`buttons-${currentImage}`}
            >

              <Link
                to="/membership"
                className="btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill"
              >
                JOIN NOW
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>

              <Link
                to="/programs"
                className="btn btn-outline-light btn-lg px-5 py-3 fw-bold rounded-pill"
              >
                EXPLORE PROGRAMS
              </Link>

            </div>

          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-2"
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className="border-0 rounded-pill"
            style={{
              width: currentImage === index ? "35px" : "10px",
              height: "8px",
              backgroundColor:
                currentImage === index ? "#dc3545" : "white",
              opacity: currentImage === index ? 1 : 0.5,
              transition: "all 0.4s ease",
            }}
          ></button>
        ))}
      </div>

      {/* Scroll Down */}
      <div
        className="position-absolute bottom-0 end-0 me-4 mb-4 d-none d-lg-block"
        style={{ opacity: 0.7 }}
      >
        <div className="text-center">
          <small className="d-block mb-2">
            SCROLL DOWN
          </small>

          <i className="bi bi-chevron-down fs-4"></i>
        </div>
      </div>

    </section>
  );
};

export default Hero;