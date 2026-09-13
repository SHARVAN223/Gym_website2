import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../services/api";

const Payment = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const planId = searchParams.get("plan");

    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlan = async () => {
            try {
                const response = await api.get("membership/");

                const selectedPlan = response.data.find(
                    (item) => item.id === Number(planId)
                );

                setPlan(selectedPlan);
            } catch (error) {
                console.error("Payment Plan Error:", error);
            } finally {
                setLoading(false);
            }
        };

        if (planId) {
            fetchPlan();
        } else {
            setLoading(false);
        }
    }, [planId]);

    if (loading) {
        return (
            <section className="bg-black text-white min-vh-100 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-danger"></div>
            </section>
        );
    }

    if (!plan) {
        return (
            <section className="bg-black text-white min-vh-100 d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h3>Plan Not Found</h3>

                    <button
                        className="btn btn-danger mt-3"
                        onClick={() => navigate("/membership")}
                    >
                        BACK TO MEMBERSHIP
                    </button>
                </div>
            </section>
        );
    }

    const handlePayment = () => {
        alert("Payment Gateway will be connected next.");
    };

    return (
        <section className="bg-black text-white min-vh-100 py-5">
            <div className="container py-5">

                <div className="text-center mb-5">
                    <p className="text-danger fw-bold text-uppercase mb-2">
                        Secure Payment
                    </p>

                    <h1 className="fw-bold">
                        COMPLETE YOUR{" "}
                        <span className="text-danger">PAYMENT</span>
                    </h1>

                    <p className="text-secondary">
                        Choose your membership plan and complete the payment.
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-5">

                        <div
                            className="p-4 p-md-5 rounded-4 border border-danger"
                            style={{
                                background:
                                    "linear-gradient(145deg, #181818, #090909)",
                            }}
                        >

                            <div className="text-center mb-4">

                                <div
                                    className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        backgroundColor:
                                            "rgba(220,53,69,0.12)",
                                    }}
                                >
                                    <i className="bi bi-credit-card-fill text-danger fs-2"></i>
                                </div>

                                <h3 className="fw-bold">
                                    {plan.name}
                                </h3>

                                <p className="text-secondary mb-0">
                                    {plan.duration}
                                </p>
                            </div>

                            <hr className="border-secondary" />

                            <div className="text-center my-4">

                                <p className="text-secondary mb-1">
                                    Total Amount
                                </p>

                                <h2 className="display-5 fw-bold">
                                    ₹{Number(plan.price).toLocaleString("en-IN")}
                                </h2>

                            </div>

                            <div className="mb-4">

                                <p>
                                    <i className="bi bi-shield-check text-danger me-2"></i>
                                    Secure Payment
                                </p>

                                <p>
                                    <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                    Instant Membership Activation
                                </p>

                                <p>
                                    <i className="bi bi-person-check-fill text-danger me-2"></i>
                                    Access to Gym Facilities
                                </p>

                            </div>

                            <button
                                className="btn btn-danger w-100 rounded-pill py-3 fw-bold"
                                onClick={handlePayment}
                            >
                                PAY ₹{Number(plan.price).toLocaleString("en-IN")}
                                <i className="bi bi-lock-fill ms-2"></i>
                            </button>

                            <button
                                className="btn btn-outline-secondary w-100 rounded-pill py-2 mt-3"
                                onClick={() =>
                                    navigate(`/checkout?plan=${plan.id}`)
                                }
                            >
                                BACK TO CHECKOUT
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;