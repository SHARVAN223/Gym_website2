
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

const TrainersList = () => {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const response = await api.get("trainers/");
                setTrainers(response.data);
            } catch (error) {
                console.error("Error fetching trainers:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrainers();
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
                        Loading trainers...
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

                    <div className="d-inline-flex align-items-center gap-3 text-danger fw-bold text-uppercase small mb-3">
                        <span
                            className="bg-danger"
                            style={{
                                width: "55px",
                                height: "2px",
                            }}
                        ></span>

                        Our Expert Trainers

                        <span
                            className="bg-danger"
                            style={{
                                width: "55px",
                                height: "2px",
                            }}
                        ></span>
                    </div>

                    <h2 className="display-5 fw-bold mb-3">
                        GUIDANCE THAT{" "}
                        <span className="text-danger">
                            GETS RESULTS
                        </span>
                    </h2>

                    <p
                        className="text-secondary fs-5 mx-auto"
                        style={{ maxWidth: "650px" }}
                    >
                        Meet our experienced trainers and get the right
                        guidance to achieve your fitness goals.
                    </p>
                </div>

                {/* Trainer Cards */}
                <div className="row g-4">

                    {trainers.length > 0 ? (
                        trainers.map((trainer) => (

                            <div
                                className="col-sm-6 col-lg-3"
                                key={trainer.id}
                            >

                                <div
                                    className="trainer-card h-100 rounded-4 overflow-hidden border border-secondary"
                                >

                                    {/* Image */}
                                    <div
                                        className="position-relative overflow-hidden"
                                        style={{ height: "350px" }}
                                    >

                                        <img
                                            src={
                                                trainer.image
                                                    ? `http://127.0.0.1:8000${trainer.image}`
                                                    : "https://via.placeholder.com/500x600?text=Trainer"
                                            }
                                            alt={trainer.name || "Trainer"}
                                            className="w-100 h-100 trainer-image"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />

                                        {/* Dark Overlay */}
                                        <div className="trainer-overlay"></div>

                                        {/* Badge */}
                                        <span
                                            className="position-absolute top-0 start-0 bg-danger text-white fw-bold rounded-pill px-3 py-2 m-3 small"
                                        >
                                            <i className="bi bi-star-fill me-1"></i>
                                            Expert Trainer
                                        </span>

                                        {/* Hover Profile */}
                                        <div className="trainer-view">
                                            <div className="trainer-view-icon">
                                                <i className="bi bi-person-fill"></i>
                                            </div>

                                            <span>
                                                View Profile
                                            </span>
                                        </div>

                                    </div>

                                    {/* Content */}
                                    <div className="p-4">

                                        <h4 className="fw-bold mb-2">
                                            {trainer.name}
                                        </h4>

                                        <p className="text-danger fw-bold mb-3">
                                            {trainer.specialization}
                                        </p>

                                        <p className="text-secondary small mb-3">
                                            <i className="bi bi-award text-danger me-2"></i>
                                            {trainer.experience} Years Experience
                                        </p>

                                        {trainer.description && (
                                            <p className="text-secondary small mb-4">
                                                {trainer.description}
                                            </p>
                                        )}

                                        {/* Social Icons */}
                                        <div className="d-flex justify-content-center gap-3 mb-4">

                                            <a
                                                href={trainer.facebook_url || "#"}
                                                className="trainer-social"
                                                aria-label="Facebook"
                                                target={trainer.facebook_url ? "_blank" : undefined}
                                                rel={trainer.facebook_url ? "noreferrer" : undefined}
                                            >
                                                <i className="bi bi-facebook"></i>
                                            </a>

                                            <a
                                                href={trainer.instagram_url || "#"}
                                                className="trainer-social"
                                                aria-label="Instagram"
                                                target={trainer.instagram_url ? "_blank" : undefined}
                                                rel={trainer.instagram_url ? "noreferrer" : undefined}
                                            >
                                                <i className="bi bi-instagram"></i>
                                            </a>

                                        </div>

                                        {/* Button */}
                                        <Link
                                            to="/contact"
                                            className="btn btn-outline-danger w-100 rounded-pill fw-bold py-2 trainer-button"
                                        >
                                            Contact Trainer
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))
                    ) : (

                        <div className="col-12 text-center py-5">

                            <i className="bi bi-person-x text-danger display-4"></i>

                            <h4 className="mt-3">
                                No Trainers Available
                            </h4>

                            <p className="text-secondary">
                                Please add trainers from Django Admin or Postman.
                            </p>

                        </div>

                    )}

                </div>

            </div>
        </section>
    );
};

export default TrainersList;

