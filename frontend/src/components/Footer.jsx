import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-top border-secondary pt-5">

      <div className="container">
        <div className="row g-4 pb-5">

          {/* Gym Info */}
          <div className="col-lg-4 col-md-6">
            <h2 className="fw-bold">
              POWER<span className="text-danger">FIT</span>
            </h2>

            <p className="text-secondary mt-3">
              Transform your body, build your strength and become
              the best version of yourself with PowerFit Gym.
            </p>

            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-white fs-4">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" className="text-white fs-4">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="text-white fs-4">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">
              Quick Links
            </h5>

            <div className="d-flex flex-column gap-2">
              <Link to="/" className="text-secondary text-decoration-none">
                Home
              </Link>

              <Link to="/about" className="text-secondary text-decoration-none">
                About
              </Link>

              <Link to="/programs" className="text-secondary text-decoration-none">
                Programs
              </Link>

              <Link to="/membership" className="text-secondary text-decoration-none">
                Membership
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">
              Our Programs
            </h5>

            <div className="d-flex flex-column gap-2 text-secondary">
              <span>Muscle Building</span>
              <span>Weight Loss</span>
              <span>Strength Training</span>
              <span>Personal Training</span>
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">
              Contact Us
            </h5>

            <p className="text-secondary">
              <i className="bi bi-geo-alt-fill text-danger me-2"></i>
              Bhopal, Madhya Pradesh
            </p>

            <p className="text-secondary">
              <i className="bi bi-telephone-fill text-danger me-2"></i>
              +91 7050093475
            </p>

            <p className="text-secondary">
              <i className="bi bi-envelope-fill text-danger me-2"></i>
              sharvan@gmail.com
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-top border-secondary py-3">
        <div className="container text-center text-secondary">
          © 2026 POWERFIT GYM. All Rights Reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;