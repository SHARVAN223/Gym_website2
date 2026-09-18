
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

const Login = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const planId = searchParams.get("plan");

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (!error) return;

        const timer = setTimeout(() => {
            setError("");
        }, 3000);

        return () => clearTimeout(timer);
    }, [error]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        if (error) {
            setError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await api.post("login/", formData);

            // JWT tokens save
            localStorage.setItem("access", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);

            const selectedPlanId = searchParams.get("plan") || localStorage.getItem("pendingPlanId");

            if (selectedPlanId) {
                localStorage.removeItem("pendingPlanId");
                navigate(`/checkout?plan=${selectedPlanId}`);
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Login Error:", error);

            if (error.response?.data?.error) {
                setError(error.response.data.error);
            } else {
                setError("Invalid email or password.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-black text-white min-vh-100 d-flex align-items-center py-5">
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-6 col-lg-5">

                        <div
                            className="p-4 p-md-5 rounded-4 border border-secondary shadow-lg"
                            style={{
                                background:
                                    "linear-gradient(145deg, #181818, #090909)",
                            }}
                        >

                            {/* Heading */}
                            <div className="text-center mb-4">

                                <div
                                    className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        backgroundColor: "rgba(220,53,69,0.12)",
                                    }}
                                >
                                    <i className="bi bi-person-fill text-danger fs-2"></i>
                                </div>

                                <h2 className="fw-bold">
                                    Welcome <span className="text-danger">Back</span>
                                </h2>

                                <p className="text-secondary mb-0">
                                    Login to continue your fitness journey
                                </p>

                            </div>

                            {/* Error */}
                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit}>

                                {/* Email */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Email Address
                                    </label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-dark border-secondary text-danger">
                                            <i className="bi bi-envelope"></i>
                                        </span>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control bg-dark text-white border-secondary"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Password
                                    </label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-dark border-secondary text-danger">
                                            <i className="bi bi-lock"></i>
                                        </span>

                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="form-control bg-dark text-white border-secondary"
                                            placeholder="Enter your password"
                                            required
                                        />

                                        <button
                                            type="button"
                                            className="btn btn-dark border-secondary text-light"
                                            onClick={() => setShowPassword((prev) => !prev)}
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                            tabIndex={0}
                                        >
                                            <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                                        </button>
                                    </div>
                                </div>

                                {/* Login Button */}
                                <button
                                    type="submit"
                                    className="btn btn-danger w-100 rounded-pill py-2 fw-bold"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span
                                                className="spinner-border spinner-border-sm me-2"
                                                role="status"
                                            ></span>
                                            Logging in...
                                        </>
                                    ) : (
                                        <>
                                            LOGIN
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </>
                                    )}
                                </button>

                            </form>

                            {/* Register */}
                            <div className="text-center mt-4">
                                <p className="text-secondary mb-0">
                                    Don't have an account?{" "}
                                    <Link
                                        to="/register"
                                        className="text-danger fw-bold text-decoration-none"
                                    >
                                        Register
                                    </Link>
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Login;

