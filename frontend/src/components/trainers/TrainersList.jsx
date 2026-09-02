import { useEffect, useState } from "react";
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
        return (<section className="bg-black text-white py-5"> <div className="container text-center py-5"> <div
            className="spinner-border text-danger"
            role="status"
        ></div>


            <p className="mt-3">
                Loading trainers...
            </p>
        </div>
        </section>
        );


    }

    return (<section className="bg-black text-white py-5"> <div className="container py-4 py-lg-5">


        <div className="text-center mb-5">
            <p className="text-danger fw-bold text-uppercase mb-2">
                Our Expert Trainers
            </p>

            <h2 className="display-5 fw-bold">
                GUIDANCE THAT
                <span className="text-danger"> GETS RESULTS</span>
            </h2>

            <p
                className="text-secondary mx-auto mt-3"
                style={{ maxWidth: "650px" }}
            >
                Meet our experienced trainers and start your fitness journey.
            </p>
        </div>

        <div className="row g-4">
            {trainers.length > 0 ? (
                trainers.map((trainer) => (
                    <div
                        className="col-md-6 col-lg-3"
                        key={trainer.id}
                    >
                        <div className="card bg-dark text-white border border-secondary rounded-4 overflow-hidden h-100">

                            <img
                                src={
                                    trainer.image
                                        ? `http://127.0.0.1:8000${trainer.image}`
                                        : "https://via.placeholder.com/400x500?text=Trainer"
                                }
                                alt={trainer.name || "Trainer"}
                                className="card-img-top"
                                style={{
                                    height: "350px",
                                    objectFit: "cover",
                                }}
                            />

                            <div className="card-body text-center p-4">

                                <h4 className="fw-bold mb-2">
                                    {trainer.name}
                                </h4>

                                <p className="text-danger fw-semibold mb-2">
                                    {trainer.specialization}
                                </p>

                                <p className="text-secondary mb-3">
                                    <i className="bi bi-award me-2"></i>
                                    {trainer.experience} Years Experience
                                </p>

                            </div>

                        </div>
                    </div>
                ))
            ) : (
                <div className="col-12 text-center">
                    <p className="text-secondary">
                        No trainers available.
                    </p>
                </div>
            )}
        </div>

    </div>
    </section>


    );
};

export default TrainersList;
