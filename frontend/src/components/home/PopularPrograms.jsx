import { Link } from "react-router-dom";

const PopularPrograms = () => {
  const programs = [
    {
      title: "Muscle Building",
      icon: "bi-lightning-charge-fill",
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
      description:
        "Build strength and muscle with professional training and personalized workout guidance.",
    },
    {
      title: "Weight Loss",
      icon: "bi-fire",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
      description:
        "Burn fat, improve fitness, and achieve your body goals with effective training programs.",
    },
    {
      title: "Strength Training",
      icon: "bi-trophy",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
      description:
        "Improve your power, endurance, and overall performance with expert guidance.",
    },
  ];

  return (<section className="bg-dark text-white py-5"> <div className="container py-4 py-lg-5">

   
    {/* Section Heading */}
    <div className="text-center mb-5">
      <p className="text-danger fw-bold text-uppercase mb-2">
        Our Programs
      </p>

      <h2 className="display-5 fw-bold">
        Train. <span className="text-danger">Transform.</span> Achieve.
      </h2>

      <p className="text-secondary mt-3">
        Choose the right training program for your fitness goals.
      </p>
    </div>

    {/* Program Cards */}
    <div className="row g-4">
      {programs.map((program, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <div className="card bg-black text-white border border-secondary rounded-4 overflow-hidden h-100">

            <img
              src={program.image}
              className="card-img-top"
              alt={program.title}
              style={{
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div className="card-body p-4">
              <i
                className={`bi ${program.icon} text-danger fs-3`}
              ></i>

              <h4 className="fw-bold mt-3">
                {program.title}
              </h4>

              <p className="text-secondary">
                {program.description}
              </p>

              <Link
                to="/programs"
                className="btn btn-outline-danger mt-2"
              >
                Explore Program
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>

          </div>
        </div>
      ))}
    </div>

    {/* View All Button */}
    <div className="text-center mt-5">
      <Link
        to="/programs"
        className="btn btn-danger btn-lg px-5 py-3 fw-bold"
      >
        View All Programs
        <i className="bi bi-arrow-right ms-2"></i>
      </Link>
    </div>

  </div>
  </section>


  );
};

export default PopularPrograms;
