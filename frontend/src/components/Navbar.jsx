import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top border-bottom border-secondary">
      <div className="container py-2">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          POWER<span className="text-danger">FIT</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav mx-auto gap-lg-3">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/programs">
                Programs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/membership">
                Membership
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/trainers">
                Trainers
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery">
                Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>

          {/* Join Button */}
          <Link
            to="/membership"
            className="btn btn-danger px-4 py-2 fw-bold"
          >
            <i className="bi bi-lightning-charge-fill me-2"></i>
            Join Now
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;