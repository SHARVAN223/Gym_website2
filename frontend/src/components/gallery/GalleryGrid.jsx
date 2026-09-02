import { useEffect, useState } from "react";
import api from "../../services/api";

const GalleryGrid = ({ limit }) => {
    const [galleryImages, setGalleryImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await api.get("gallery/");
                setGalleryImages(response.data);
            } catch (error) {
                console.error("Error fetching gallery:", error);
                setError("Unable to load gallery. Please try again.");
            } finally {
                setLoading(false);
            }
        };


        fetchGallery();


    }, []);

    const displayedImages = limit
        ? galleryImages.slice(0, limit)
        : galleryImages;

    if (loading) {
        return (<section className="bg-black text-white py-5"> <div className="container text-center py-5"> <div
            className="spinner-border text-danger"
            role="status"
        ></div>


            <p className="mt-3 text-secondary">
                Loading gallery...
            </p>
        </div>
        </section>
        );


    }

    if (error) {
        return (<section className="bg-black text-white py-5"> <div className="container text-center py-5"> <p className="text-danger">{error}</p> </div> </section>
        );
    }

    return (<section className="bg-black text-white py-5"> <div className="container py-4 py-lg-5">


        <div className="text-center mb-5">
            <p className="text-danger fw-bold text-uppercase mb-2">
                Explore Our Gym
            </p>

            <h2 className="display-5 fw-bold">
                WHERE FITNESS
                <span className="text-danger"> COMES TO LIFE</span>
            </h2>

            <p
                className="text-secondary mx-auto mt-3"
                style={{ maxWidth: "650px" }}
            >
                Take a look inside PowerFit and experience the environment
                where hard work, discipline, and transformation happen.
            </p>
        </div>

        <div className="row g-4">
            {displayedImages.length > 0 ? (
                displayedImages.map((item) => (
                    <div
                        className="col-md-6 col-lg-4"
                        key={item.id}
                    >
                        <div className="position-relative overflow-hidden rounded-4 shadow">

                            <img
                                src={
                                    item.image
                                        ? `http://127.0.0.1:8000${item.image}`
                                        : "https://via.placeholder.com/1200x800?text=Gym+Gallery"
                                }
                                alt={item.title || "Gym Gallery"}
                                className="img-fluid w-100"
                                style={{
                                    height: "300px",
                                    objectFit: "cover",
                                }}
                            />

                            {item.title && (
                                <div
                                    className="position-absolute bottom-0 start-0 end-0 p-4"
                                    style={{
                                        background:
                                            "linear-gradient(transparent, rgba(0,0,0,0.85))",
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
                <div className="col-12 text-center">
                    <h4>No Gallery Images Available</h4>
                    <p className="text-secondary">
                        Please add images from Django Admin or Postman.
                    </p>
                </div>
            )}
        </div>

    </div>
    </section>


    );
};

export default GalleryGrid;
