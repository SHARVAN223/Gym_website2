import { useState } from "react";

const initialFormData = {
    fullName: "",
    phone: "",
    email: "",
    message: "",
};

const ContactContent = () => {
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");
        setFormData(initialFormData);
    };

    return (<section className="bg-black text-white py-5"> <div className="container py-4 py-lg-5">


        <div className="row g-5">

            {/* Contact Information */}
            <div className="col-lg-5">

                <p className="text-danger fw-bold text-uppercase mb-2">
                    Get In Touch
                </p>

                <h2 className="display-5 fw-bold mb-4">
                    WE ARE READY TO
                    <span className="text-danger"> HELP YOU</span>
                </h2>

                <p className="text-secondary fs-5 mb-5">
                    Have questions about membership, training, or our gym?
                    Contact us and our team will be happy to help you.
                </p>

                {/* Phone */}
                <div className="d-flex align-items-center mb-4">
                    <div
                        className="bg-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: "55px", height: "55px" }}
                    >
                        <i className="bi bi-telephone-fill fs-5"></i>
                    </div>

                    <div className="ms-3">
                        <p className="text-secondary mb-1">Call Us</p>
                        <h5 className="mb-0 fw-bold">
                            +91 7050093475
                        </h5>
                    </div>
                </div>

                {/* Email */}
                <div className="d-flex align-items-center mb-4">
                    <div
                        className="bg-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: "55px", height: "55px" }}
                    >
                        <i className="bi bi-envelope-fill fs-5"></i>
                    </div>

                    <div className="ms-3">
                        <p className="text-secondary mb-1">Email Us</p>
                        <h5 className="mb-0 fw-bold">
                            sharvan@gmail.com
                        </h5>
                    </div>
                </div>

                {/* Address */}
                <div className="d-flex align-items-center mb-4">
                    <div
                        className="bg-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: "55px", height: "55px" }}
                    >
                        <i className="bi bi-geo-alt-fill fs-5"></i>
                    </div>

                    <div className="ms-3">
                        <p className="text-secondary mb-1">Visit Us</p>
                        <h5 className="mb-0 fw-bold">
                            Bhopal, Madhya Pradesh
                        </h5>
                    </div>
                </div>

                {/* WhatsApp */}
                <a
                    href="https://wa.me/917050093475"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success px-4 py-3 fw-bold mt-3"
                >
                    <i className="bi bi-whatsapp me-2"></i>
                    Chat With Us On WhatsApp
                </a>

            </div>

            {/* Contact Form */}
            <div className="col-lg-7">

                <div className="bg-dark rounded-4 p-4 p-lg-5 border border-secondary">

                    <h3 className="fw-bold mb-4">
                        Send Us A Message
                    </h3>

                    <form onSubmit={handleSubmit}>

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="form-control bg-black text-white border-secondary py-3"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="form-control bg-black text-white border-secondary py-3"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control bg-black text-white border-secondary py-3"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label">
                                    Your Message
                                </label>

                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-control bg-black text-white border-secondary"
                                    placeholder="Write your message..."
                                    required
                                ></textarea>
                            </div>

                            <div className="col-12">
                                <button
                                    type="submit"
                                    className="btn btn-danger w-100 py-3 fw-bold"
                                >
                                    Send Message
                                    <i className="bi bi-send-fill ms-2"></i>
                                </button>
                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    </div>
    </section>


    );
};

export default ContactContent;
