const GymExperience = () => {
    const highlights = [
        {
            icon: "bi-clock-history",
            title: "Flexible Training Hours",
            description: "Train at a time that fits your daily routine.",
        },
        {
            icon: "bi-bar-chart-line-fill",
            title: "Track Your Progress",
            description: "Stay consistent and monitor your fitness journey.",
        },
        {
            icon: "bi-person-heart",
            title: "Personal Support",
            description: "Get guidance and motivation throughout your journey.",
        },
    ];

    return (<section className="bg-dark text-white py-5"> <div className="container py-4 py-lg-5">

        
        <div className="row align-items-center g-5">

            {/* Image */}
            <div className="col-lg-6">
                <div className="position-relative">

                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
                        alt="PowerFit Gym Experience"
                        className="img-fluid w-100 rounded-4 shadow"
                        style={{
                            height: "480px",
                            objectFit: "cover",
                        }}
                    />

                    <div className="position-absolute bottom-0 start-0 bg-danger m-3 p-4 rounded-3">
                        <h3 className="fw-bold mb-1">POWERFIT</h3>
                        <p className="mb-0">
                            Train Strong. Live Strong.
                        </p>
                    </div>

                </div>
            </div>

            {/* Content */}
            <div className="col-lg-6">

                <p className="text-danger fw-bold text-uppercase mb-2">
                    The PowerFit Experience
                </p>

                <h2 className="display-5 fw-bold mb-4">
                    A PLACE BUILT FOR
                    <span className="text-danger"> YOUR PROGRESS</span>
                </h2>

                <p className="text-secondary fs-5 mb-4">
                    PowerFit is designed to give you more than just a place
                    to work out. We provide a motivating environment where
                    you can train, improve, and stay consistent.
                </p>

                <div className="d-flex flex-column gap-4">
                    {highlights.map((item, index) => (
                        <div
                            className="d-flex align-items-start gap-3"
                            key={index}
                        >
                            <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                style={{
                                    width: "55px",
                                    height: "55px",
                                }}
                            >
                                <i className={`bi ${item.icon} fs-4`}></i>
                            </div>

                            <div>
                                <h5 className="fw-bold mb-1">
                                    {item.title}
                                </h5>

                                <p className="text-secondary mb-0">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>

    </div>
    </section>


    );
};

export default GymExperience;
