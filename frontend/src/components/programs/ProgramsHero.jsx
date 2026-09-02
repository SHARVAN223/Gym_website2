import { Link } from "react-router-dom";

const ProgramsHero = () => {
    return (
        <section
            className="py-5 text-white"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.88)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        > <div className="container py-5"> <div className="row justify-content-center text-center"> <div className="col-lg-9">

            
            <p className="text-danger fw-bold text-uppercase mb-3">
                Our Training Programs
            </p>

            <h1 className="display-3 fw-bold mb-4">
                FIND THE PROGRAM
                <br />
                <span className="text-danger">
                    BUILT FOR YOUR GOALS
                </span>
            </h1>

            <p className="lead text-light mb-4">
                Whether you want to build muscle, lose weight, improve
                strength, or increase your fitness level, we have the
                right program for you.
            </p>

            <Link
                to="/membership"
                className="btn btn-danger btn-lg px-5 py-3 fw-bold"
            >
                Start Training Today
                <i className="bi bi-arrow-right ms-2"></i>
            </Link>

        </div>
        </div>
            </div>
        </section>


    );
};

export default ProgramsHero;
