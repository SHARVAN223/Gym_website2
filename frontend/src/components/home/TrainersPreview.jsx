
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

const TrainersPreview = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await api.get("trainers/");
        setTrainers(response.data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching trainers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  if (loading) {
    return (
      <section className="bg-black text-white py-5">
        <div className="container text-center py-5">
          <div className="spinner-border text-danger"></div>

          <p className="text-secondary mt-3">
            Loading our trainers...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black text-white py-5 overflow-hidden">
      <div className="container py-4 py-lg-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
            <span
              className="bg-danger"
              style={{ width: "45px", height: "2px" }}
            ></span>

            <span className="text-danger fw-bold text-uppercase small">
              Our Expert Team
            </span>

            <span
              className="bg-danger"
              style={{ width: "45px", height: "2px" }}
            ></span>
          </div>

          <h2 className="display-5 fw-bold mb-3">
            TRAIN WITH
            <span className="text-danger"> THE BEST</span>
          </h2>

          <p
            className="text-secondary fs-5 mx-auto"
            style={{ maxWidth: "650px" }}
          >
            Meet the experienced trainers who will push you,
            guide you, and help you become stronger every day.
          </p>

        </div>

        {/* Trainers */}
        <div className="row g-4 justify-content-center">

          {trainers.length > 0 ? (
            trainers.map((trainer, index) => (

              <div
                className="col-md-6 col-lg-4"
                key={trainer.id}
                style={{ "--trainer-delay": `${index * 120}ms` }}
              >

                <div className="trainer-preview-card position-relative bg-dark rounded-4 overflow-hidden h-100">

                  {/* Image */}
                  <div className="position-relative overflow-hidden">

                    <img
                      src={
                        trainer.image
                          ? `http://127.0.0.1:8000${trainer.image}`
                          : "https://via.placeholder.com/600x700?text=Trainer"
                      }
                      alt={trainer.name || "Trainer"}
                      className="trainer-preview-image trainer-image w-100"
                      style={{
                        height: "430px",
                        objectFit: "cover",
                      }}
                    />

                    {/* Dark Gradient */}
                    <div
                      className="position-absolute bottom-0 start-0 end-0"
                      style={{
                        height: "45%",
                        background:
                          "linear-gradient(transparent, rgba(0,0,0,0.95))",
                      }}
                    ></div>

                    {/* Experience Badge */}
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-danger rounded-pill px-3 py-2">
                        {trainer.experience}+ Years
                      </span>
                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-4 text-center">

                    <h4 className="fw-bold mb-2">
                      {trainer.name}
                    </h4>

                    <p className="text-danger fw-semibold mb-3">
                      {trainer.specialization}
                    </p>

                    <div className="d-flex justify-content-center align-items-center gap-2 text-secondary mb-3">
                      <i className="bi bi-award-fill text-danger"></i>

                      <span>
                        Professional Fitness Trainer
                      </span>
                    </div>

                    {trainer.description && (
                      <p className="text-secondary small mb-0">
                        {trainer.description}
                      </p>
                    )}

                    <div className="trainer-preview-socials d-flex justify-content-center gap-3 mt-3">
                      <a
                        href={trainer.facebook_url || "#"}
                        className="trainer-preview-social"
                        aria-label={`${trainer.name || "Trainer"} on Facebook`}
                        target={trainer.facebook_url ? "_blank" : undefined}
                        rel={trainer.facebook_url ? "noreferrer" : undefined}
                      >
                        <i className="bi bi-facebook"></i>
                      </a>

                      <a
                        href={trainer.instagram_url || "#"}
                        className="trainer-preview-social"
                        aria-label={`${trainer.name || "Trainer"} on Instagram`}
                        target={trainer.instagram_url ? "_blank" : undefined}
                        rel={trainer.instagram_url ? "noreferrer" : undefined}
                      >
                        <i className="bi bi-instagram"></i>
                      </a>
                    </div>

                  </div>

                </div>

              </div>

            ))
          ) : (
            <div className="col-12 text-center py-4">
              <h5>No trainers available</h5>

              <p className="text-secondary">
                Add trainers from Django Admin or Postman.
              </p>
            </div>
          )}

        </div>

        {/* Button */}
        <div className="text-center mt-5">

          <Link
            to="/trainers"
            className="btn btn-danger btn-lg rounded-pill px-5 py-3 fw-bold"
          >
            Meet All Trainers
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default TrainersPreview;

