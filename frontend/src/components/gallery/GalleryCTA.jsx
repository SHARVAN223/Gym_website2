import { Link } from "react-router-dom";

const GalleryCTA = () => {
    return (<section className="bg-dark text-white py-5"> <div className="container py-4 py-lg-5">


        <div className="bg-danger rounded-4 p-4 p-lg-5 text-center shadow-lg">

            <p className="text-uppercase fw-bold mb-2">
                Ready To Start?
            </p>

            <h2 className="display-5 fw-bold mb-3">
                COME TRAIN
                <br />
                WITH US
            </h2>

            <p
                className="lead mb-4 mx-auto"
                style={{ maxWidth: "700px" }}
            >
                Visit PowerFit and experience a motivating environment,
                professional training, and everything you need to achieve
                your fitness goals.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3">

                <Link
                    to="/membership"
                    className="btn btn-dark btn-lg px-5 py-3 fw-bold"
                >
                    Join PowerFit
                    <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <Link
                    to="/contact"
                    className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
                >
                    Contact Us
                </Link>

            </div>

        </div>

    </div>
    </section>


    );
};

export default GalleryCTA;
