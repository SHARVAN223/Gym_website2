
import { Link } from "react-router-dom";

const MembershipHero = () => {
  return (
    <section className="membership-hero about-hero position-relative min-vh-100 d-flex align-items-center overflow-hidden text-white">

      {/* Animated Background */}
      <div className="membership-hero-bg"></div>

      {/* Red Glow */}
      <div className="hero-glow"></div>

      <div className="container position-relative z-2">
        <div className="row align-items-center min-vh-75">

          {/* Left Content */}
          <div className="col-lg-8 py-5">

            {/* Badge */}
            <div className="hero-badge mb-4">
              <span className="hero-dot"></span>
              MEMBERSHIP PLANS
            </div>

            {/* Heading */}
            <h1 className="display-2 fw-bold hero-title">
              INVEST IN YOUR
              <br />
              <span className="text-danger">
                STRONGEST SELF
              </span>
            </h1>

            {/* Description */}
            <p className="lead text-light hero-description mt-4">
              Choose a membership plan that fits your fitness goals
              and start your journey toward a stronger, healthier,
              and more confident life.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3 mt-4 hero-buttons">

              <Link
                to="/membership"
                className="btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill hero-main-btn"
              >
                Join Aarav Gym
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>

              <a
                href="#plans"
                className="btn btn-outline-light btn-lg px-5 py-3 fw-bold rounded-pill hero-outline-btn"
              >
                View Plans
                <i className="bi bi-chevron-down ms-2"></i>
              </a>

            </div>

            {/* Small Trust Text */}
            <div className="d-flex flex-wrap gap-4 mt-4 hero-trust">

              <span>
                <i className="bi bi-check-circle-fill text-danger me-2"></i>
                Flexible Plans
              </span>

              <span>
                <i className="bi bi-check-circle-fill text-danger me-2"></i>
                Expert Trainers
              </span>

              <span>
                <i className="bi bi-check-circle-fill text-danger me-2"></i>
                Modern Equipment
              </span>

            </div>
          </div>
        </div>
      </div>

      <a href="#plans" className="scroll-indicator">
        <i className="bi bi-chevron-down"></i>
      </a>

    </section>
  );
};

export default MembershipHero;

