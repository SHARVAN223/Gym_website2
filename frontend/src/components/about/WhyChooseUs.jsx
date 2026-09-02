const WhyChooseUs = () => {
    const features = [
        {
            icon: "bi-person-check-fill",
            title: "Expert Guidance",
            description:
                "Our experienced trainers help you train safely and effectively.",
        },
        {
            icon: "bi-lightning-charge-fill",
            title: "Goal Focused Training",
            description:
                "Training programs designed to help you achieve real results.",
        },
        {
            icon: "bi-people-fill",
            title: "Supportive Community",
            description:
                "Train in a motivating environment with people who support you.",
        },
        {
            icon: "bi-barbell",
            title: "Modern Equipment",
            description:
                "Access quality equipment for strength, cardio, and fitness training.",
        },
    ];

    return (<section className="bg-black text-white py-5"> <div className="container py-4 py-lg-5">

        
        {/* Heading */}
        <div className="text-center mb-5">
            <p className="text-danger fw-bold text-uppercase mb-2">
                Why PowerFit
            </p>

            <h2 className="display-5 fw-bold">
                EVERYTHING YOU NEED TO
                <span className="text-danger"> GET STRONGER</span>
            </h2>

            <p className="text-secondary mt-3 mx-auto" style={{ maxWidth: "650px" }}>
                We provide the right environment, guidance, and support
                to help you stay consistent and achieve your fitness goals.
            </p>
        </div>

        {/* Feature Cards */}
        <div className="row g-4">
            {features.map((feature, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                    <div className="bg-dark border border-secondary rounded-4 p-4 h-100">

                        <div className="mb-4">
                            <i
                                className={`bi ${feature.icon} text-danger display-5`}
                            ></i>
                        </div>

                        <h4 className="fw-bold mb-3">
                            {feature.title}
                        </h4>

                        <p className="text-secondary mb-0">
                            {feature.description}
                        </p>

                    </div>
                </div>
            ))}
        </div>

    </div>
    </section>


    );
};

export default WhyChooseUs;
