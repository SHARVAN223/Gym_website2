import { Link } from "react-router-dom";

const TrainersHero = () => {
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
                Meet Our Team
            </p>

            <h1 className="display-3 fw-bold mb-4">
                TRAIN WITH
                <br />
                <span className="text-danger">
                    THE BEST
                </span>
            </h1>

            <p className="lead text-light mx-auto mb-4">
                Meet our passionate and experienced trainers who are here
                to guide, motivate, and support you throughout your
                fitness journey.
            </p>

            <Link
                to="/contact"
                className="btn btn-danger btn-lg px-5 py-3 fw-bold"
            >
                Talk To Our Trainers
                <i className="bi bi-arrow-right ms-2"></i>
            </Link>

        </div>
        </div>
            </div>
        </section>


    );
};

export default TrainersHero;
