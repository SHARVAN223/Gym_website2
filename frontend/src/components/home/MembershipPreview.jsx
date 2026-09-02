import { Link } from "react-router-dom";

const MembershipPreview = () => {
  const plans = [
    {
      duration: "1 Month",
      subtitle: "Perfect for getting started",
      price: "₹999",
      features: [
        "Full Gym Access",
        "Modern Equipment",
        "Basic Trainer Support",
      ],
      popular: false,
    },
    {
      duration: "3 Months",
      subtitle: "Best value for consistent training",
      price: "₹2,499",
      features: [
        "Full Gym Access",
        "Modern Equipment",
        "Trainer Guidance",
        "Personalized Support",
      ],
      popular: true,
    },
    {
      duration: "6 Months",
      subtitle: "Best for long-term transformation",
      price: "₹4,499",
      features: [
        "Full Gym Access",
        "Modern Equipment",
        "Personal Trainer Support",
        "Progress Tracking",
      ],
      popular: false,
    },
  ];

  return (<section className="bg-black text-white py-5"> <div className="container py-4 py-lg-5">

    
    {/* Section Heading */}
    <div className="text-center mb-5">
      <p className="text-danger fw-bold text-uppercase mb-2">
        Membership Plans
      </p>

      <h2 className="display-5 fw-bold">
        Choose Your
        <span className="text-danger"> Perfect Plan</span>
      </h2>

      <p className="text-secondary mt-3">
        Start your fitness journey with a plan that suits your goals.
      </p>
    </div>

    {/* Plans */}
    <div className="row g-4 justify-content-center">
      {plans.map((plan, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <div
            className={`card h-100 rounded-4 p-3 ${plan.popular
                ? "bg-danger text-white border-0 shadow-lg"
                : "bg-dark text-white border border-secondary"
              }`}
          >
            <div className="card-body text-center">

              {plan.popular && (
                <span className="badge bg-black px-3 py-2 mb-3">
                  MOST POPULAR
                </span>
              )}

              <h4 className="fw-bold">
                {plan.duration}
              </h4>

              <p
                className={
                  plan.popular ? "" : "text-secondary"
                }
              >
                {plan.subtitle}
              </p>

              <h2 className="display-5 fw-bold my-4">
                {plan.price}
              </h2>

              <hr />

              <div className="text-start my-4">
                {plan.features.map((feature, featureIndex) => (
                  <p key={featureIndex}>
                    <i className="bi bi-check-circle-fill me-2"></i>
                    {feature}
                  </p>
                ))}
              </div>

              <Link
                to="/membership"
                className={`btn w-100 py-3 fw-bold ${plan.popular
                    ? "btn-dark"
                    : "btn-outline-danger"
                  }`}
              >
                Choose Plan
              </Link>

            </div>
          </div>
        </div>
      ))}
    </div>

    {/* View All Plans */}
    <div className="text-center mt-5">
      <Link
        to="/membership"
        className="btn btn-danger btn-lg px-5 py-3 fw-bold"
      >
        View All Membership Plans
        <i className="bi bi-arrow-right ms-2"></i>
      </Link>
    </div>

  </div>
  </section>


  );
};

export default MembershipPreview;
