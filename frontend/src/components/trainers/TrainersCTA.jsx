import { Link } from "react-router-dom";

const TrainersCTA = () => {
    return (<section className="bg-dark text-white py-5"> <div className="container py-4 py-lg-5">

        
        <div className="bg-danger rounded-4 p-4 p-lg-5 text-center shadow-lg">

            <p className="text-uppercase fw-bold mb-2">
                Train With Confidence
            </p>

            <h2 className="display-5 fw-bold mb-3">
                GET EXPERT GUIDANCE
                <br />
                FOR YOUR FITNESS GOALS
            </h2>

            <p
                className="lead mb-4 mx-auto"
                style={{ maxWidth: "700px" }}
            >
                Our trainers are ready to help you stay motivated,
                train correctly, and achieve better results.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3">

                <Link
                    to="/contact"
                    className="btn btn-dark btn-lg px-5 py-3 fw-bold"
                >
                    Contact Our Trainers
                    <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <Link
                    to="/membership"
                    className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
                >
                    Join PowerFit
                </Link>

            </div>

        </div>

    </div>
    </section>


    );
};

export default TrainersCTA;
