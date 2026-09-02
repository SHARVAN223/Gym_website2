import { Link } from "react-router-dom";

const MissionVision = () => {
    return (<section className="bg-dark text-white py-5"> <div className="container py-4 py-lg-5">

        
        {/* Heading */}
        <div className="text-center mb-5">
            <p className="text-danger fw-bold text-uppercase mb-2">
                Our Purpose
            </p>

            <h2 className="display-5 fw-bold">
                WHAT DRIVES
                <span className="text-danger"> POWERFIT</span>
            </h2>
        </div>

        <div className="row g-4 justify-content-center">

            {/* Mission */}
            <div className="col-md-6">
                <div className="bg-black border border-secondary rounded-4 p-4 p-lg-5 h-100">

                    <div className="mb-4">
                        <i className="bi bi-bullseye text-danger display-4"></i>
                    </div>

                    <p className="text-danger fw-bold text-uppercase">
                        Our Mission
                    </p>

                    <h3 className="fw-bold mb-3">
                        Empower You To Become Stronger
                    </h3>

                    <p className="text-secondary fs-5 mb-4">
                        Our mission is to provide a motivating environment,
                        expert guidance, and effective training programs that
                        help people achieve their fitness goals.
                    </p>

                    <div className="d-flex align-items-center gap-3">
                        <i className="bi bi-check-circle-fill text-danger fs-5"></i>
                        <span>Professional Guidance</span>
                    </div>

                    <div className="d-flex align-items-center gap-3 mt-3">
                        <i className="bi bi-check-circle-fill text-danger fs-5"></i>
                        <span>Personal Growth</span>
                    </div>

                </div>
            </div>

            {/* Vision */}
            <div className="col-md-6">
                <div className="bg-danger rounded-4 p-4 p-lg-5 h-100">

                    <div className="mb-4">
                        <i className="bi bi-eye-fill display-4"></i>
                    </div>

                    <p className="fw-bold text-uppercase">
                        Our Vision
                    </p>

                    <h3 className="fw-bold mb-3">
                        Build A Stronger Community
                    </h3>

                    <p className="fs-5 mb-4">
                        We aim to create a fitness community where everyone
                        feels motivated, supported, and confident enough to
                        become the best version of themselves.
                    </p>

                    <div className="d-flex align-items-center gap-3">
                        <i className="bi bi-check-circle-fill fs-5"></i>
                        <span>Healthy Lifestyle</span>
                    </div>

                    <div className="d-flex align-items-center gap-3 mt-3">
                        <i className="bi bi-check-circle-fill fs-5"></i>
                        <span>Stronger Community</span>
                    </div>

                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-5">
            <Link
                to="/membership"
                className="btn btn-danger btn-lg px-5 py-3 fw-bold"
            >
                Start Your Journey
                <i className="bi bi-arrow-right ms-2"></i>
            </Link>
        </div>

    </div>
    </section>


    );
};

export default MissionVision;
