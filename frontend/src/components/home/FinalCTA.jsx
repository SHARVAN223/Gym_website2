import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (<section className="bg-black text-white py-5"> <div className="container py-4 py-lg-5">


    <div className="bg-danger rounded-4 p-5 text-center shadow-lg">

      <p className="text-uppercase fw-bold mb-2">
        Your Fitness Journey Starts Today
      </p>

      <h2 className="display-4 fw-bold">
        READY TO TRANSFORM
        <br />
        YOUR BODY?
      </h2>

      <p className="lead mt-3 mb-4">
        Stop waiting for the perfect time. Start your fitness
        journey today and become the strongest version of yourself.
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-3">

        <Link
          to="/membership"
          className="btn btn-dark btn-lg px-5 py-3 fw-bold"
        >
          Join PowerFit Now
          <i className="bi bi-arrow-right ms-2"></i>
        </Link>

        <Link
          to="/contact"
          className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
        >
          Contact Us
        </Link>

      </div>

    </div>

  </div>
  </section>


  );
};

export default FinalCTA;
