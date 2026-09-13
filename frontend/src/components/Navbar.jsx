
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/aarav-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark sticky-top professional-navbar ${scrolled ? "navbar-scrolled" : ""
        }`}
    >
      <div className="container py-2">

        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
        >
          <img
            src={logo}
            alt="Aarav Gym & Fitness Club"
            className="navbar-logo"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler navbar-menu-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto gap-lg-2">

            <li className="nav-item">
              <NavLink
                className="nav-link professional-nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link professional-nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link professional-nav-link"
                to="/programs"
              >
                Programs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link professional-nav-link"
                to="/membership"
              >
                Membership
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link professional-nav-link"
                to="/trainers"
              >
                Trainers
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link professional-nav-link"
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link professional-nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>

          </ul>

          {/* Join Button */}
          <Link
            to="/membership"
            className="btn btn-danger navbar-join-btn px-4 py-2 fw-bold"
          >
            <i className="bi bi-lightning-charge-fill me-2"></i>
            Join Now
            <i className="bi bi-arrow-right ms-2 navbar-arrow"></i>
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;

