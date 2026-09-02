import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "bi-person-workspace",
      title: "Expert Trainers",
      description: "Professional trainers to guide your fitness journey.",
    },
    {
      icon: "bi-gear-wide-connected",
      title: "Modern Equipment",
      description: "Train with modern and high-quality gym equipment.",
    },
    {
      icon: "bi-heart-pulse",
      title: "Healthy Lifestyle",
      description: "Build strength, confidence, and healthy habits.",
    },
    {
      icon: "bi-trophy",
      title: "Best Results",
      description: "Personalized training for better fitness results.",
    },
  ];

  return (<section className="bg-black text-white py-5"> <div className="container py-4 py-lg-5"> <div className="row align-items-center g-5">

    
    {/* Gym Image */}
    <div className="col-lg-6">
      <div className="position-relative">
        <img
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
          alt="PowerFit Gym Training"
          className="img-fluid w-100 rounded-4 shadow"
          style={{
            height: "500px",
            objectFit: "cover",
          }}
        />

        <div className="position-absolute bottom-0 start-0 bg-danger m-3 p-4 rounded-3">
          <h4 className="fw-bold mb-1">
            TRAIN HARD
          </h4>

          <p className="mb-0">
            Become stronger every day
          </p>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="col-lg-6">
      <p className="text-danger fw-bold text-uppercase mb-2">
        Why Choose PowerFit
      </p>

      <h2 className="display-5 fw-bold">
        More Than Just
        <span className="text-danger"> A Gym</span>
      </h2>

      <p className="text-secondary fs-5 mt-4">
        At PowerFit Gym, we provide the right environment,
        expert guidance, and modern equipment to help you
        achieve your fitness goals.
      </p>

      {/* Feature Cards */}
      <div className="row g-3 mt-3">
        {features.map((feature, index) => (
          <div className="col-sm-6" key={index}>
            <div className="bg-dark border border-secondary rounded-4 p-4 h-100">
              <i className={`bi ${feature.icon} text-danger fs-2`}></i>

              <h5 className="fw-bold mt-3">
                {feature.title}
              </h5>

              <p className="text-secondary mb-0">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/about"
        className="btn btn-outline-danger mt-4 px-4 py-2 fw-bold"
      >
        Learn More
        <i className="bi bi-arrow-right ms-2"></i>
      </Link>
    </div>

  </div>
  </div>
  </section>

  );
};

export default WhyChooseUs;
