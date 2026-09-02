import { Link } from "react-router-dom";

const MembershipCTA = () => {
    return (<section className="bg-dark text-white py-5"> <div className="container py-4 py-lg-5">

        
        <div className="bg-danger rounded-4 p-4 p-lg-5 text-center shadow-lg">

            <p className="text-uppercase fw-bold mb-2">
                Start Today
            </p>

            <h2 className="display-5 fw-bold mb-3">
                DON'T WAIT FOR
                <br />
                THE PERFECT TIME
            </h2>

            <p
                className="lead mb-4 mx-auto"
                style={{ maxWidth: "700px" }}
            >
                Your fitness journey starts with one decision.
                Choose your membership plan and start becoming
                the strongest version of yourself.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3">

                <Link
                    to="/contact"
                    className="btn btn-dark btn-lg px-5 py-3 fw-bold"
                >
                    Join PowerFit Now
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

export default MembershipCTA;
