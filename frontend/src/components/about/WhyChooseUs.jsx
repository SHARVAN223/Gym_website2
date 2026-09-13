
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

    return (
        <section className="why-choose-section bg-black text-white py-5 overflow-hidden">
            <div className="container py-4 py-lg-5">

                {/* Heading */}
                <div className="text-center mb-5 why-heading">
                    <p className="text-danger fw-bold text-uppercase mb-2 why-label">
                        Why Aarav Gym
                    </p>

                    <h2 className="display-5 fw-bold">
                        EVERYTHING YOU NEED TO
                        <span className="text-danger"> GET STRONGER</span>
                    </h2>

                    <p
                        className="text-secondary mt-3 mx-auto why-description"
                    >
                        We provide the right environment, guidance, and support
                        to help you stay consistent and achieve your fitness goals.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div
                            className="col-md-6 col-lg-3"
                            key={index}
                        >
                            <div
                                className="why-feature-card bg-dark border border-secondary rounded-4 p-4 h-100"
                                style={{
                                    animationDelay: `${index * 0.12}s`,
                                }}
                            >

                                {/* Icon */}
                                <div className="why-feature-icon mb-4">
                                    <i
                                        className={`bi ${feature.icon} text-danger display-5`}
                                    ></i>
                                </div>

                                {/* Title */}
                                <h4 className="fw-bold mb-3">
                                    {feature.title}
                                </h4>

                                {/* Description */}
                                <p className="text-secondary mb-0 why-feature-text">
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

