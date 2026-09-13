import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

const ProgramCards = () => {
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await api.get("programs/");
                setPrograms(response.data);
            } catch (error) {
                console.error("Error fetching programs:", error);
                setError("Unable to load programs. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchPrograms();
    }, []);

    if (loading) {
        return (
            <section className="bg-black text-white py-5">
                <div className="container text-center py-5">
                    <div
                        className="spinner-border text-danger"
                        role="status"
                    ></div>

                    <p className="mt-3 text-secondary">
                        Loading programs...
                    </p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="bg-black text-white py-5">
                <div className="container text-center py-5">
                    <p className="text-danger">{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-black text-white py-5">
            <div className="container py-4 py-lg-5">

                {/* Heading */}
                <div className="text-center mb-5 animate__animated animate__fadeInUp">

                    <p className="text-danger fw-bold text-uppercase mb-2 tracking-wide">
                        Choose Your Goal
                    </p>

                    <h2 className="display-5 fw-bold">
                        TRAIN SMART.
                        <span className="text-danger"> GET RESULTS.</span>
                    </h2>

                    <p
                        className="text-secondary mx-auto mt-3"
                        style={{ maxWidth: "650px" }}
                    >
                        Explore our professional training programs designed
                        to help you achieve your fitness goals.
                    </p>

                </div>

                {/* Program Cards */}
                <div className="row g-4">

                    {programs.length > 0 ? (
                        programs.map((program, index) => (

                            <div
                                className="col-md-6 col-lg-4"
                                key={program.id}
                            >

                                <div
                                    className="program-card card bg-dark text-white border border-secondary rounded-4 overflow-hidden h-100 shadow-lg"
                                    style={{
                                        animationDelay: `${index * 0.15}s`,
                                    }}
                                >

                                    {/* Image */}
                                    <div className="program-image-wrapper position-relative overflow-hidden">

                                        <img
                                            src={
                                                program.image
                                                    ? `http://127.0.0.1:8000${program.image}`
                                                    : "https://via.placeholder.com/900x600?text=Program"
                                            }
                                            alt={program.name}
                                            className="program-image card-img-top w-100"
                                            style={{
                                                height: "280px",
                                                objectFit: "cover",
                                            }}
                                        />

                                        {/* Icon */}
                                        <div
                                            className="position-absolute top-0 end-0 bg-danger m-3 rounded-circle d-flex align-items-center justify-content-center shadow"
                                            style={{
                                                width: "58px",
                                                height: "58px",
                                            }}
                                        >
                                            <i className="bi bi-lightning-charge-fill fs-4"></i>
                                        </div>

                                        {/* Bottom overlay */}
                                        <div className="position-absolute bottom-0 start-0 end-0 p-3 program-overlay">
                                            <span className="badge bg-danger">
                                                Aarav Gym
                                            </span>
                                        </div>

                                    </div>

                                    {/* Content */}
                                    <div className="card-body p-4 d-flex flex-column">

                                        <h4 className="fw-bold mb-3">
                                            {program.name}
                                        </h4>

                                        <p className="text-secondary">
                                            {program.description}
                                        </p>

                                        {/* Duration */}
                                        <div className="d-flex align-items-center mb-3">
                                            <div
                                                className="bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-2"
                                                style={{
                                                    width: "38px",
                                                    height: "38px",
                                                }}
                                            >
                                                <i className="bi bi-clock text-danger"></i>
                                            </div>

                                            <div>
                                                <small className="text-secondary d-block">
                                                    Duration
                                                </small>

                                                <span className="fw-semibold">
                                                    {program.duration}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Benefits */}
                                        <div className="mb-4">
                                            <p className="mb-2">
                                                <strong className="text-danger">
                                                    Benefits
                                                </strong>
                                            </p>

                                            <p className="text-secondary mb-0">
                                                {program.benefits}
                                            </p>
                                        </div>

                                        {/* Button */}
                                        <Link
                                            to="/membership"
                                            className="btn btn-outline-danger mt-auto py-2 fw-bold rounded-pill transition-all"
                                        >
                                            Join This Program
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))
                    ) : (

                        <div className="col-12 text-center py-5">

                            <h4>No Programs Available</h4>

                            <p className="text-secondary">
                                Please add programs from Django Admin or
                                Postman.
                            </p>

                        </div>

                    )}

                </div>

            </div>
        </section>
    );
};

export default ProgramCards;