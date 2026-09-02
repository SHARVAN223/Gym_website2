import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rohit Kumar",
      role: "PowerFit Member",
      review:
        "PowerFit has completely changed my fitness journey. The trainers are supportive and the environment is amazing.",
    },
    {
      name: "Priya Sharma",
      role: "PowerFit Member",
      review:
        "I achieved great results with proper guidance and consistent training. Highly recommended for anyone starting their fitness journey.",
    },
    {
      name: "Amit Verma",
      role: "PowerFit Member",
      review:
        "Modern equipment, professional trainers, and a motivating environment. Everything you need to achieve your fitness goals.",
    },
  ];

  return (<section className="bg-dark text-white py-5"> <div className="container py-4 py-lg-5">

    
    {/* Section Heading */}
    <div className="text-center mb-5">
      <p className="text-danger fw-bold text-uppercase mb-2">
        Testimonials
      </p>

      <h2 className="display-5 fw-bold">
        WHAT OUR
        <span className="text-danger"> MEMBERS SAY</span>
      </h2>

      <p className="text-secondary mt-3">
        Real experiences from our PowerFit family.
      </p>
    </div>

    {/* Testimonial Cards */}
    <div className="row g-4">
      {testimonials.map((testimonial, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <div className="bg-black border border-secondary rounded-4 p-4 h-100">

            {/* Quote Icon */}
            <i className="bi bi-quote text-danger display-4"></i>

            {/* Review */}
            <p className="text-secondary fs-5">
              "{testimonial.review}"
            </p>

            {/* Stars */}
            <div className="text-warning mb-4">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>

            {/* Member Info */}
            <div className="border-top border-secondary pt-3">
              <h5 className="fw-bold mb-1">
                {testimonial.name}
              </h5>

              <p className="text-danger mb-0">
                {testimonial.role}
              </p>
            </div>

          </div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-5">
      <Link
        to="/membership"
        className="btn btn-danger btn-lg px-5 py-3 fw-bold"
      >
        Start Your Fitness Journey
        <i className="bi bi-arrow-right ms-2"></i>
      </Link>
    </div>

  </div>
  </section>


  );
};

export default Testimonials;
