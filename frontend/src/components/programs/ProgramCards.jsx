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
        return (<section className="bg-black text-white py-5"> <div className="container text-center py-5"> <div
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
        return (<section className="bg-black text-white py-5"> <div className="container text-center py-5"> <p className="text-danger">{error}</p> </div> </section>
        );
    }

    return (<section className="bg-black text-white py-5"> <div className="container py-4 py-lg-5">


        <div className="text-center mb-5">
            <p className="text-danger fw-bold text-uppercase mb-2">
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
                Explore our professional training programs designed to help
                you achieve your fitness goals.
            </p>
        </div>

        <div className="row g-4">
            {programs.length > 0 ? (
                programs.map((program) => (
                    <div className="col-md-6 col-lg-4" key={program.id}>
                        <div className="card bg-dark text-white border border-secondary rounded-4 overflow-hidden h-100 shadow">

                            <div className="position-relative">
                                <img
                                    src={
                                        program.image
                                            ? `http://127.0.0.1:8000${program.image}`
                                            : "https://via.placeholder.com/900x600?text=Program"
                                    }
                                    alt={program.name}
                                    className="card-img-top"
                                    style={{
                                        height: "240px",
                                        objectFit: "cover",
                                    }}
                                />

                                <div
                                    className="position-absolute top-0 end-0 bg-danger m-3 rounded-circle d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "55px",
                                        height: "55px",
                                    }}
                                >
                                    <i className="bi bi-lightning-charge-fill fs-4"></i>
                                </div>
                            </div>

                            <div className="card-body p-4 d-flex flex-column">

                                <h4 className="fw-bold">
                                    {program.name}
                                </h4>

                                <p className="text-secondary">
                                    {program.description}
                                </p>

                                <p className="small text-light">
                                    <i className="bi bi-clock me-2 text-danger"></i>
                                    {program.duration}
                                </p>

                                <p className="small text-secondary">
                                    <strong className="text-danger">
                                        Benefits:
                                    </strong>
                                    <br />
                                    {program.benefits}
                                </p>

                                <Link
                                    to="/membership"
                                    className="btn btn-outline-danger mt-auto"
                                >
                                    Join This Program
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>

                            </div>

                        </div>
                    </div>
                ))
            ) : (
                <div className="col-12 text-center">
                    <h4>No Programs Available</h4>
                    <p className="text-secondary">
                        Please add programs from Django Admin or Postman.
                    </p>
                </div>
            )}
        </div>

    </div>
    </section>


    );
};

export default ProgramCards;
