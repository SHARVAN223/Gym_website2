import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

const GalleryPreview = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await api.get("gallery/");

        // Home page par sirf 3 images
        setImages(response.data.slice(0, 3));
      } catch (error) {
        console.error("Gallery Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <section className="bg-black text-white py-5">
      <div className="container py-4 py-lg-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <p className="text-danger fw-bold text-uppercase mb-2">
            Our Gallery
          </p>

          <h2 className="display-5 fw-bold">
            AARAV GYM
            <span className="text-danger"> IN ACTION</span>
          </h2>

          <p className="text-secondary mt-3">
            Explore our gym environment and training experience.
          </p>

        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-center py-5">

            <div
              className="spinner-border text-danger"
              role="status"
            ></div>

            <p className="text-secondary mt-3">
              Loading gallery...
            </p>

          </div>
        ) : (

          <div className="row g-4">

            {images.length > 0 ? (
              images.map((item) => (

                <div
                  className="col-md-6 col-lg-4"
                  key={item.id}
                >

                  <div className="gallery-preview-card position-relative overflow-hidden rounded-4 shadow">

                    <img
                      src={
                        item.image
                          ? `http://127.0.0.1:8000${item.image}`
                          : "https://via.placeholder.com/1200x800?text=Gym+Gallery"
                      }
                      alt={item.title || "Aarav Gym"}
                      className="img-fluid w-100"
                      style={{
                        height: "380px",
                        objectFit: "cover",
                      }}
                    />

                    {/* Title */}
                    {item.title && (
                      <div
                        className="position-absolute bottom-0 start-0 end-0 p-4"
                        style={{
                          background:
                            "linear-gradient(transparent, rgba(0,0,0,0.9))",
                        }}
                      >
                        <h5 className="fw-bold mb-0">
                          {item.title}
                        </h5>
                      </div>
                    )}

                  </div>

                </div>

              ))
            ) : (

              <div className="col-12 text-center py-4">

                <h4>No Gallery Images Available</h4>

                <p className="text-secondary">
                  Please add images from Django Admin or Postman.
                </p>

              </div>

            )}

          </div>

        )}

        {/* View Full Gallery */}
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