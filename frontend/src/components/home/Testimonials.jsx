import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await api.get("testimonials/");
        setTestimonials(response.data);
      } catch (fetchError) {
        console.error("Error fetching testimonials:", fetchError);
        setError("Unable to load testimonials. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const getImageUrl = (image) => {
    if (!image) return "";
    return image.startsWith("http") ? image : `http://127.0.0.1:8000${image}`;
  };

  if (loading) {
    return (
      <section className="bg-dark text-white py-5">
        <div className="container text-center py-5">
          <div className="spinner-border text-danger" role="status"></div>
          <p className="mt-3 text-secondary">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-dark text-white py-5">
        <div className="container text-center py-5">
          <p className="text-danger">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black text-white py-5">
      <div className="container py-4 py-lg-5">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-4 mb-5">
          <div>
            <div className="d-inline-flex align-items-center gap-2 text-danger fw-bold text-uppercase small mb-3">
              <span className="bg-danger" style={{ width: "28px", height: "2px" }}></span>
              Member Stories
            </div>
            <h2 className="display-5 fw-bold mb-3">
              REAL PEOPLE. <span className="text-danger">REAL RESULTS.</span>
            </h2>
            <p className="text-secondary fs-5 mb-0" style={{ maxWidth: "580px" }}>
              See why our members keep showing up, getting stronger, and becoming their best selves.
            </p>
          </div>
          <div className="d-flex align-items-center gap-3 text-lg-end">
            <div>
              <div className="text-warning fs-5">★★★★★</div>
              <small className="text-secondary">Trusted by our members</small>
            </div>
            <div className="border-start border-secondary ps-3">
              <div className="fs-3 fw-bold">{testimonials.length}+</div>
              <small className="text-secondary">Success stories</small>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {testimonials.length > 0 ? testimonials.map((testimonial) => (
            <div className="col-md-6 col-lg-4" key={testimonial.id}>
              <article
                className="h-100 p-4 p-xl-5 rounded-4 border border-secondary"
                style={{
                  background: "linear-gradient(145deg, #171717 0%, #090909 100%)",
                  boxShadow: "0 18px 40px rgba(0, 0, 0, 0.22)",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-4">
                  {testimonial.image ? (
                    <img
                      src={getImageUrl(testimonial.image)}
                      alt={testimonial.name}
                      className="rounded-circle"
                      style={{ width: "64px", height: "64px", objectFit: "cover" }}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.nextElementSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className="rounded-circle bg-danger text-white fw-bold align-items-center justify-content-center"
                    style={{
                      width: "64px",
                      height: "64px",
                      display: testimonial.image ? "none" : "flex",
                    }}
                    aria-hidden="true"
                  >
                    {testimonial.name?.charAt(0).toUpperCase() || "M"}
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">{testimonial.name}</h5>
                    <p className="text-danger mb-0 small">PowerFit Member</p>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <i className="bi bi-quote text-danger fs-1"></i>
                  <div className="text-warning small" aria-label={`${testimonial.rating || 0} out of 5 stars`}>
                    {Array.from({ length: 5 }, (_, index) => (
                      <i className={`bi ${index < (testimonial.rating || 0) ? "bi-star-fill" : "bi-star"} ms-1`} key={index}></i>
                    ))}
                    <span className="text-white ms-2">{testimonial.rating || 0}.0</span>
                  </div>
                </div>

                <p className="text-light fs-5 lh-base mb-4">“{testimonial.review}”</p>

                <div className="border-top border-secondary pt-3 d-flex justify-content-between align-items-center">
                  <span className="text-secondary small">Verified member review</span>
                  {testimonial.created_at && (
                    <time className="text-secondary small" dateTime={testimonial.created_at}>
                      {new Date(testimonial.created_at).toLocaleDateString("en-IN", {
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  )}
                </div>
              </article>
            </div>
          )) : (
            <div className="col-12 text-center py-4">
              <h4>No testimonials available</h4>
              <p className="text-secondary">Add testimonials from Django Admin or Postman.</p>
            </div>
          )}
        </div>
        <div className="text-center mt-5">
          <Link to="/membership" className="btn btn-danger btn-lg px-5 py-3 fw-bold">
            Start Your Fitness Journey
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
