
import { useEffect, useState } from "react";
import api from "../../services/api";

const MembershipPlans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await api.get("membership/");

        const activePlans = response.data.filter(
          (plan) => plan.is_active
        );

        setPlans(activePlans);
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
      <div className="container py-5">

        {/* Section Heading */}
        <div className="text-center mb-5">
          <p className="text-danger fw-bold text-uppercase mb-2">
            Membership Plans
          </p>

          <h2 className="display-5 fw-bold">
            CHOOSE YOUR{" "}
            <span className="text-danger">PLAN</span>
          </h2>

          <p
            className="text-secondary mx-auto mt-3"
            style={{ maxWidth: "650px" }}
          >
            Choose the perfect membership plan for your fitness journey
            and start building a stronger, healthier you.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="row g-4 justify-content-center">

          {plans.length > 0 ? (
            plans.map((plan, index) => {
              const isPopular = index === 1;

              return (
                <div
                  className="col-md-6 col-lg-3"
                  key={plan.id}
                >
                  <div
                    className={`h-100 position-relative rounded-4 p-4 ${
                      isPopular
                        ? "border border-danger"
                        : "border border-secondary"
                    }`}
                    style={{
                      background:
                        "linear-gradient(145deg, #181818, #090909)",
                    }}
                  >

                    {/* Popular Badge */}
                    {isPopular && (
                      <div className="position-absolute top-0 start-50 translate-middle">
                        <span className="badge bg-danger rounded-pill px-3 py-2">
                          MOST POPULAR
                        </span>
                      </div>
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

                      {/* Plan Name */}
                      <h4 className="fw-bold mb-3">
                        {plan.name}
                      </h4>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-3">
                      <span className="display-5 fw-bold">
                        ₹{Number(plan.price).toLocaleString("en-IN")}
                      </span>
                    </div>

                    {/* Duration */}
                    <div className="text-center text-danger fw-semibold mb-4">
                      <i className="bi bi-calendar-check me-2"></i>
                      {plan.duration}
                    </div>

                    {/* Description */}
                    <p
                      className="text-secondary text-center mb-4"
                      style={{ minHeight: "75px" }}
                    >
                      {plan.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">

                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        <span>Full Gym Access</span>
                      </div>

                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        <span>Modern Equipment</span>
                      </div>

                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        <span>Professional Trainers</span>
                      </div>

                      <div className="d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                        <span>Fitness Support</span>
                      </div>

                    </div>

                    {/* Join Button */}
                    <button
                      className={`btn w-100 rounded-pill fw-bold py-2 ${
                        isPopular
                          ? "btn-danger"
                          : "btn-outline-danger"
                      }`}
                    >
                      JOIN NOW
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>

                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center">
              <h5>No Membership Plans Available</h5>
              <p className="text-secondary">
                Please add membership plans from Postman.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default MembershipPlans;

