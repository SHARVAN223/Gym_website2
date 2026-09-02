const OurStory = () => {
    return (<section className="bg-black text-white py-5"> <div className="container py-4 py-lg-5"> <div className="row align-items-center g-5">

        
        {/* Left Content */}
        <div className="col-lg-6">
            <p className="text-danger fw-bold text-uppercase mb-2">
                Our Story
            </p>

            <h2 className="display-5 fw-bold mb-4">
                BUILT FOR PEOPLE WHO
                <span className="text-danger"> WANT MORE</span>
            </h2>

            <p className="text-secondary fs-5">
                PowerFit Gym was created with one simple goal: to provide
                a motivating environment where people can become stronger,
                healthier, and more confident.
            </p>

            <p className="text-secondary fs-5">
                Whether you are just starting your fitness journey or
                working toward your next big goal, our team is here to
                support and guide you every step of the way.
            </p>

            {/* Small Features */}
            <div className="row g-3 mt-4">

                <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-danger fs-4 me-3"></i>

                        <div>
                            <h6 className="fw-bold mb-1">
                                Professional Training
                            </h6>

                            <p className="text-secondary mb-0 small">
                                Expert guidance for every goal.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-danger fs-4 me-3"></i>

                        <div>
                            <h6 className="fw-bold mb-1">
                                Supportive Community
                            </h6>

                            <p className="text-secondary mb-0 small">
                                Train and grow together.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-6">
            <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80"
                alt="PowerFit Gym"
                className="img-fluid w-100 rounded-4 shadow"
                style={{
                    height: "450px",
                    objectFit: "cover",
                }}
            />
        </div>

    </div>
    </div>
    </section>


    );
};

export default OurStory;
