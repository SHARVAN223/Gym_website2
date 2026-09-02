import { Link } from "react-router-dom";

const MembershipPlans = () => {
    const plans = [
        {
            name: "Basic",
            duration: "1 Month",
            price: "₹999",
            popular: false,
            features: [
                "Full Gym Access",
                "Modern Equipment",
                "Basic Trainer Support",
            ],
        },
        {
            name: "Standard",
            duration: "3 Months",
            price: "₹2,499",
            popular: true,
            features: [
                "Full Gym Access",
                "Modern Equipment",
                "Trainer Guidance",
                "Progress Support",
            ],
        },
        {
            name: "Premium",
            duration: "6 Months",
            price: "₹4,499",
            popular: false,
            features: [
                "Full Gym Access",
                "Modern Equipment",
                "Trainer Guidance",
                "Progress Tracking",
                "Priority Support",
            ],
        },
        {
            name: "Ultimate",
            duration: "12 Months",
            price: "₹7,999",
            popular: false,
            features: [
                "Full Gym Access",
                "Modern Equipment",
                "Trainer Guidance",
                "Progress Tracking",
                "Priority Support",
            ],
        },
    ];

    return (<section id="plans" className="bg-black text-white py-5"> <div className="container py-4 py-lg-5">

        
        {/* Heading */}
        <div className="text-center mb-5">
            <p className="text-danger fw-bold text-uppercase mb-2">
                Choose Your Plan
            </p>

            <h2 className="display-5 fw-bold">
                MEMBERSHIP THAT FITS
                <span className="text-danger"> YOUR GOALS</span>
            </h2>

            <p
                className="text-secondary mx-auto mt-3"
                style={{ maxWidth: "650px" }}
            >
                Choose the membership duration that works best for your
                fitness journey and stay consistent with your goals.
            </p>
        </div>

        {/* Plans */}
        <div className="row g-4 justify-content-center">
            {plans.map((plan, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                    <div
                        className={`card h-100 rounded-4 ${plan.popular
                                ? "bg-danger text-white border-0 shadow-lg"
                                : "bg-dark text-white border border-secondary"
                            }`}
                    >
                        <div className="card-body p-4 d-flex flex-column text-center">

                            {plan.popular && (
                                <div className="mb-3">
                                    <span className="badge bg-black px-3 py-2">
                                        MOST POPULAR
                                    </span>
                                </div>
                            )}

                            <h4 className="fw-bold">
                                {plan.name}
                            </h4>

                            <p
                                className={
                                    plan.popular
                                        ? "mb-3"
                                        : "text-secondary mb-3"
                                }
                            >
                                {plan.duration}
                            </p>

                            <h2 className="display-6 fw-bold mb-4">
                                {plan.price}
                            </h2>

                            <hr
                                className={
                                    plan.popular
                                        ? "border-light"
                                        : "border-secondary"
                                }
                            />

                            <div className="text-start mb-4">
                                {plan.features.map((feature, featureIndex) => (
                                    <p
                                        className="mb-3"
                                        key={featureIndex}
                                    >
                                        <i className="bi bi-check-circle-fill me-2"></i>
                                        {feature}
                                    </p>
                                ))}
                            </div>

                            <Link
                                to="/contact"
                                className={`btn mt-auto py-3 fw-bold ${plan.popular
                                        ? "btn-dark"
                                        : "btn-outline-danger"
                                    }`}
                            >
                                Choose Plan
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>

                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
    </section>


    );
};

export default MembershipPlans;
