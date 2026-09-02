import { Link } from "react-router-dom";

const MembershipHero = () => {
    return (
        <section
            className="py-5 text-white"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.90)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        > <div className="container py-5"> <div className="row justify-content-center text-center"> <div className="col-lg-9">

            
            <p className="text-danger fw-bold text-uppercase mb-3">
                Membership Plans
            </p>

            <h1 className="display-3 fw-bold mb-4">
                INVEST IN YOUR
                <br />
                <span className="text-danger">
                    STRONGEST SELF
                </span>
            </h1>

            <p className="lead text-light mx-auto mb-4">
                Choose a membership plan that fits your fitness goals
                and start your journey toward a stronger and healthier life.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link
                    to="/contact"
                    className="btn btn-danger btn-lg px-5 py-3 fw-bold"
                >
                    Join PowerFit
                    <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <a
                    href="#plans"
                    className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
                >
                    View Plans
                </a>
            </div>

        </div>
        </div>
            </div>
        </section>


    );
};

export default MembershipHero;
