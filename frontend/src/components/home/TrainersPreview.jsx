import { Link } from "react-router-dom";

const TrainersPreview = () => {
  const trainers = [
    {
      name: "Rahul Sharma",
      role: "Strength & Muscle Coach",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Aman Verma",
      role: "Weight Loss Coach",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Vikram Singh",
      role: "Personal Trainer",
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (<section className="bg-dark text-white py-5"> <div className="container py-4 py-lg-5">

    
    {/* Section Heading */}
    <div className="text-center mb-5">
      <p className="text-danger fw-bold text-uppercase mb-2">
        Our Trainers
      </p>

      <h2 className="display-5 fw-bold">
        Train With The
        <span className="text-danger"> Best</span>
      </h2>

      <p className="text-secondary mt-3">
        Meet our experienced trainers and take your fitness
        journey to the next level.
      </p>
    </div>

    {/* Trainer Cards */}
    <div className="row g-4">
      {trainers.map((trainer, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <div className="card bg-black text-white border border-secondary rounded-4 overflow-hidden h-100">

            <img
              src={trainer.image}
              alt={trainer.name}
              className="card-img-top"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80";
                e.target.onerror = null;
              }}
              style={{
                height: "380px",
                objectFit: "cover",
              }}
            />

            <div className="card-body text-center p-4">
              <h4 className="fw-bold mb-1">
                {trainer.name}
              </h4>

              <p className="text-danger mb-3">
                {trainer.role}
              </p>

              <p className="text-secondary">
                Get expert guidance and personalized support
                for your fitness goals.
              </p>

              <div className="d-flex justify-content-center gap-3">
                <a
                  href="#"
                  className="text-white fs-5"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>

                <a
                  href="#"
                  className="text-white fs-5"
                  aria-label="Facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>

    {/* Button */}
    <div className="text-center mt-5">
      <Link
        to="/trainers"
        className="btn btn-danger btn-lg px-5 py-3 fw-bold"
      >
        Meet Our Trainers
        <i className="bi bi-arrow-right ms-2"></i>
      </Link>
    </div>

  </div>
  </section>


  );
};

export default TrainersPreview;
