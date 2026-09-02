import { Link } from "react-router-dom";

const AboutHero = () => {
    return (
        <section
            className="py-5 text-white"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.80), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        > <div className="container py-5"> <div className="row justify-content-center text-center"> <div className="col-lg-8">

            
            <p className="text-danger fw-bold text-uppercase mb-3">
                About PowerFit
            </p>

            <h1 className="display-3 fw-bold mb-4">
                MORE THAN JUST
                <span className="text-danger"> A GYM</span>
            </h1>

            <p className="lead text-light mb-4">
                We are a community focused on helping you build strength,
                confidence, discipline, and a healthier lifestyle.
            </p>

            <Link
                to="/membership"
                className="btn btn-danger btn-lg px-5 py-3 fw-bold"
            >
                Join Our Community
                <i className="bi bi-arrow-right ms-2"></i>
            </Link>

        </div>
        </div>
            </div>
        </section>


    );
};

export default AboutHero;
