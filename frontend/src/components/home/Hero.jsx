
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="min-vh-100 d-flex align-items-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.92), rgba(0,0,0,0.60)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">

            <span className="badge bg-danger px-3 py-2 mb-4">
              🔥 TRANSFORM YOUR BODY
            </span>

            <h1 className="display-2 fw-bold">
              BUILD YOUR
              <br />
              <span className="text-danger">
                STRONGEST SELF
              </span>
            </h1>

            <p className="lead mt-4">
              Train harder, get stronger, and transform your lifestyle
              with expert trainers and modern equipment.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">

              <Link
                to="/membership"
                className="btn btn-danger btn-lg px-5 py-3 fw-bold"
              >
                Join Now
              </Link>

              <Link
                to="/programs"
                className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
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

export default Hero;

