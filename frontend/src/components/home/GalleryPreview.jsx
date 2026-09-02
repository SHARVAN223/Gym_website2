import { Link } from "react-router-dom";

const GalleryPreview = () => {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
      alt: "Modern Gym",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
      alt: "Gym Training",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
      alt: "Fitness Training",
    },
  ];

  return (<section className="bg-black text-white py-5"> <div className="container py-4 py-lg-5">


    {/* Section Heading */}
    <div className="text-center mb-5">
      <p className="text-danger fw-bold text-uppercase mb-2">
        Our Gallery
      </p>

      <h2 className="display-5 fw-bold">
        POWERFIT
        <span className="text-danger"> IN ACTION</span>
      </h2>

      <p className="text-secondary mt-3">
        Explore our gym environment and training experience.
      </p>
    </div>

    {/* Gallery Images */}
    <div className="row g-4">
      {images.map((item, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <div className="overflow-hidden rounded-4 shadow">

            <img
              src={item.image}
              alt={item.alt}
              className="img-fluid w-100"
              style={{
                height: "300px",
                objectFit: "cover",
              }}
            />

          </div>
        </div>
      ))}
    </div>

    {/* Button */}
    <div className="text-center mt-5">
      <Link
        to="/gallery"
        className="btn btn-outline-danger btn-lg px-5 py-3 fw-bold"
      >
        View Full Gallery
        <i className="bi bi-images ms-2"></i>
      </Link>
    </div>

  </div>
  </section>


  );
};

export default GalleryPreview;
