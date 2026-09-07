
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");
        setLoading(true);

        try {
            await api.post("register/", formData);

            setSuccess("Registration successful! Redirecting to login...");

            setTimeout(() => {
                const planId = new URLSearchParams(window.location.search).get("plan");
                
                navigate(planId ? `/login?plan=${planId}` : "/login");  
            }, 1500);

        } catch (error) {
            console.error("Registration Error:", error);

            if (error.response?.data) {
                const data = error.response.data;

                if (data.email) {
                    setError(data.email[0]);
                } else if (data.phone) {
                    setError(data.phone[0]);
                } else if (data.name) {
                    setError(data.name[0]);
                } else if (data.password) {
                    setError(data.password[0]);
                } else {
                    setError("Registration failed. Please check your details.");
                }
            } else {
                setError("Unable to connect to server.");
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
                                    <i className="bi bi-person-plus-fill text-danger fs-2"></i>
                                </div>

                                <h2 className="fw-bold">
                                    Join <span className="text-danger">PowerFit</span>
                                </h2>

                                <p className="text-secondary mb-0">
                                    Create your account and start your fitness journey
                                </p>

                            </div>

                            {/* Error */}
                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}

                            {/* Success */}
                            {success && (
                                <div className="alert alert-success">
                                    {success}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>

                                {/* Name */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Full Name
                                    </label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-dark border-secondary text-danger">
                                            <i className="bi bi-person"></i>
                                        </span>

                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control bg-dark text-white border-secondary"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                </div>

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

                                {/* Phone */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Phone Number
                                    </label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-dark border-secondary text-danger">
                                            <i className="bi bi-telephone"></i>
                                        </span>

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-control bg-dark text-white border-secondary"
                                            placeholder="Enter your phone number"
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
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="form-control bg-dark text-white border-secondary"
                                            placeholder="Create a password"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Register Button */}
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
                                            Creating Account...
                                        </>
                                    ) : (
                                        <>
                                            CREATE ACCOUNT
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </>
                                    )}
                                </button>

                            </form>

                            {/* Login Link */}
                            <div className="text-center mt-4">
                                <p className="text-secondary mb-0">
                                    Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="text-danger fw-bold text-decoration-none"
                                    >
                                        Login
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

export default Register;

