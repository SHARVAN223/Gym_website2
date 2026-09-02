
const Stats = () => {
  return (
    <section className="bg-dark text-white border-top border-bottom border-secondary py-5">
      <div className="container py-3">

        <div className="row text-center g-4">

          {/* Experience */}
          <div className="col-6 col-lg-3">
            <h2 className="text-danger fw-bold display-5 mb-2">
              10+
            </h2>

            <p className="text-secondary mb-0">
              Years Experience
            </p>
          </div>

          {/* Members */}
          <div className="col-6 col-lg-3">
            <h2 className="text-danger fw-bold display-5 mb-2">
              5000+
            </h2>

            <p className="text-secondary mb-0">
              Happy Members
            </p>
          </div>

          {/* Trainers */}
          <div className="col-6 col-lg-3">
            <h2 className="text-danger fw-bold display-5 mb-2">
              20+
            </h2>

            <p className="text-secondary mb-0">
              Expert Trainers
            </p>
          </div>

          {/* Equipment */}
          <div className="col-6 col-lg-3">
            <h2 className="text-danger fw-bold display-5 mb-2">
              50+
            </h2>

            <p className="text-secondary mb-0">
              Modern Equipment
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Stats;

