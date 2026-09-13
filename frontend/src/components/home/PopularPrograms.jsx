import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

const PopularPrograms = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await api.get("programs/");

        setPrograms(response.data.slice(0, 3));
      } catch (error) {
        console.error("Programs Error:", error);
        setError("Unable to load programs.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <section className="bg-dark text-white py-5">
      <div className="container py-4 py-lg-5">

        {/* Section Heading */}
        <div className="text-center mb-5">

          <p className="text-danger fw-bold text-uppercase mb-2">
            Our Programs
          </p>

          <h2 className="display-5 fw-bold">
            Train. <span className="text-danger">Transform.</span> Achieve.
          </h2>

          <p className="text-secondary mt-3">
            Choose the right training program for your fitness goals.
          </p>

        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-5">
            <div
              className="spinner-border text-danger"
              role="status"
            ></div>

            <p className="text-secondary mt-3">
              Loading programs...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="alert alert-danger text-center">
            {error}
          </div>
        )}

        {/* Programs */}
        {!loading && !error && (
          <div className="row g-4">

            {programs.map((program) => (
              <div
                className="col-md-6 col-lg-4"
                key={program.id}
              >

                <div className="program-card card bg-black text-white border border-secondary rounded-4 overflow-hidden h-100">

                  {/* Image */}
                  <img
                    src={
                      program.image?.startsWith("http")
                        ? program.image
                        : `http://127.0.0.1:8000${program.image}`
                    }
                    className="card-img-top"
                    alt={program.name}
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />

                  {/* Content */}
                  <div className="card-body p-4">

                    <div className="mb-3">
                      <i className="bi bi-lightning-charge-fill text-danger fs-3"></i>
                    </div>

                    <h4 className="fw-bold">
                      {program.name}
                    </h4>

                    <p className="text-secondary">
                      {program.description}
                    </p>

                    <Link
                      to="/programs"
                      className="btn btn-outline-danger mt-2"
                    >
                      Explore Program
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

        {/* No Programs */}
        {!loading && !error && programs.length === 0 && (
          <div className="text-center py-5">
            <p className="text-secondary">
              No programs available right now.
            </p>
          </div>
        )}

        {/* View All */}
        <div className="text-center mt-5">

          <Link
            to="/programs"
            className="btn btn-danger btn-lg px-5 py-3 fw-bold"
          >
            View All Programs
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default PopularPrograms;