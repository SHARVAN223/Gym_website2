import { Link } from "react-router-dom";

const ContactCTA = () => {
    return (<section className="bg-dark text-white py-5"> <div className="container py-4 py-lg-5">

        
        <div className="bg-danger rounded-4 p-4 p-lg-5 text-center shadow-lg">

            <p className="text-uppercase fw-bold mb-2">
                Ready To Get Started?
            </p>

            <h2 className="display-5 fw-bold mb-3">
                YOUR STRONGEST
                <br />
                JOURNEY STARTS HERE
            </h2>

            <p
                className="lead mb-4 mx-auto"
                style={{ maxWidth: "700px" }}
            >
                Take the first step toward a stronger and healthier
                lifestyle. Explore our membership plans and start today.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3">

                <Link
                    to="/membership"
                    className="btn btn-dark btn-lg px-5 py-3 fw-bold"
                >
                    View Membership Plans
                    <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <Link
                    to="/programs"
                    className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
                >
                    Explore Programs
                </Link>

            </div>

        </div>

    </div>
    </section>


    );
};

export default ContactCTA;
