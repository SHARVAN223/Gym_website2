
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

const MembershipPreview = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await api.get("membership/");

        const activePlans = response.data.filter(
          (plan) => plan.is_active
        );

        setPlans(activePlans.slice(0, 3));
      } catch (error) {
        console.error("Error fetching membership plans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return (
      <section className="bg-black text-white py-5">
        <div className="container text-center py-5">
          <div className="spinner-border text-danger" role="status"></div>
          <p className="text-secondary mt-3">
            Loading membership plans...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black text-white py-5">
      <div className="container py-4 py-lg-5">

        {/* Heading */}
        <div className="text-center mb-5">
          <p className="text-danger fw-bold text-uppercase mb-2">
            Membership
          </p>

          <h2 className="display-5 fw-bold">
            START YOUR{" "}
            <span className="text-danger">TRANSFORMATION</span>
          </h2>

          <p
            className="text-secondary mx-auto mt-3"
            style={{ maxWidth: "650px" }}
          >
            Choose a membership plan that fits your goals and start
            your fitness journey with PowerFit Gym.
          </p>
        </div>

        {/* Plans */}
        <div className="row g-4 justify-content-center">

          {plans.length > 0 ? (
            plans.map((plan, index) => {
              const isPopular = index === 1;

              return (
                <div
                  className="col-md-6 col-lg-4"
                  key={plan.id}
                >
                  <div
                    className={`position-relative h-100 rounded-4 p-4 ${
                      isPopular
                        ? "border border-danger"
                        : "border border-secondary"
                    }`}
                    style={{
                      background:
                        "linear-gradient(145deg, #181818, #090909)",
                    }}
                  >

                    {/* Popular */}
                    {isPopular && (
                      <span className="position-absolute top-0 start-50 translate-middle badge bg-danger rounded-pill px-3 py-2">
                        MOST POPULAR
                      </span>
                    )}

                    {/* Icon */}
                    <div className="text-center mt-3">
                      <div
                        className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "65px",
                          height: "65px",
                          backgroundColor: "rgba(220,53,69,0.12)",
                        }}
                      >
                        <i className="bi bi-award-fill text-danger fs-3"></i>
                      </div>

                      <h4 className="fw-bold">
                        {plan.name}
                      </h4>
                    </div>

                    {/* Price */}
                    <div className="text-center my-3">
                      <span className="display-5 fw-bold">
                        ₹{Number(plan.price).toLocaleString("en-IN")}
                      </span>
                    </div>

                    {/* Duration */}
                    <p className="text-center text-danger fw-semibold">
                      <i className="bi bi-calendar-check me-2"></i>
                      {plan.duration}
                    </p>

                    {/* Description */}
                    <p
                      className="text-secondary text-center mt-3"
                      style={{ minHeight: "70px" }}
                    >
                      {plan.description}
                    </p>

                    {/* Features */}
                    <div className="mt-4 mb-4">

                      <p>
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        Full Gym Access
                      </p>

                      <p>
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        Modern Equipment
                      </p>

                      <p>
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        Professional Trainers
                      </p>

                      <p className="mb-0">
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        Fitness Support
                      </p>

                    </div>

                    {/* Button */}
                    <Link
                      to="/membership"
                      className={`btn w-100 rounded-pill fw-bold py-2 ${
                        isPopular
                          ? "btn-danger"
                          : "btn-outline-danger"
                      }`}
                    >
                      VIEW PLAN
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>

                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center">
              <h5>No Membership Plans Available</h5>

              <p className="text-secondary">
                Please add membership plans from Postman.
              </p>
            </div>
          )}

        </div>

        {/* View All */}
        <div className="text-center mt-5">
          <Link
            to="/membership"
            className="btn btn-danger rounded-pill px-4 py-2 fw-bold"
          >
            VIEW ALL MEMBERSHIP PLANS
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default MembershipPreview;

