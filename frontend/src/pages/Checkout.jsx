import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../services/api";

const Checkout = () => {
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
                console.error("Error fetching plan:", error);
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
                    <h3>Membership Plan Not Found</h3>
                    <button
                        className="btn btn-danger mt-3"
                        onClick={() => navigate("/membership")}
                    >
                        Back to Membership
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-black text-white min-vh-100 py-5">
            <div className="container py-5">

                <div className="text-center mb-5">
                    <p className="text-danger fw-bold text-uppercase">
                        Membership Checkout
                    </p>

                    <h1 className="fw-bold">
                        COMPLETE YOUR <span className="text-danger">MEMBERSHIP</span>
                    </h1>

                    <p className="text-secondary">
                        Review your selected membership plan
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
                                        backgroundColor: "rgba(220,53,69,0.12)",
                                    }}
                                >
                                    <i className="bi bi-award-fill text-danger fs-2"></i>
                                </div>

                                <h3 className="fw-bold">{plan.name}</h3>
                            </div>

                            <div className="text-center mb-4">
                                <span className="display-4 fw-bold">
                                    ₹{Number(plan.price).toLocaleString("en-IN")}
                                </span>

                                <p className="text-danger fw-semibold mt-2">
                                    {plan.duration}
                                </p>
                            </div>

                            <hr className="border-secondary" />

                            <div className="my-4">
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

                                <p>
                                    <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                    Fitness Support
                                </p>
                            </div>

                            <button
                                className="btn btn-danger w-100 rounded-pill py-3 fw-bold"
                            >
                                PROCEED TO PAYMENT
                                <i className="bi bi-arrow-right ms-2"></i>
                            </button>

                            <button
                                className="btn btn-outline-secondary w-100 rounded-pill py-2 mt-3"
                                onClick={() => navigate("/membership")}
                            >
                                BACK TO PLANS
                            </button>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Checkout;