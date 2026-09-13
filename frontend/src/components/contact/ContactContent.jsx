
import { useState } from "react";
import api from "../../services/api";

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post("contact/", {
                name: formData.fullName,
                phone: formData.phone,
                email: formData.email,
                message: formData.message,
            });

            alert("Thank you! Your message has been sent successfully.");
            setFormData(initialFormData);

        } catch (error) {
            console.error("Contact Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="contact-content-section bg-black text-white py-5 overflow-hidden">
            <div className="container py-4 py-lg-5">

                <div className="row g-5">

                    {/* Contact Information */}
                    <div className="col-lg-5">

                        <div className="contact-info">

                            <p className="text-danger fw-bold text-uppercase mb-2 contact-label">
                                Get In Touch
                            </p>

                            <h2 className="display-5 fw-bold mb-4">
                                WE ARE READY TO
                                <span className="text-danger"> HELP YOU</span>
                            </h2>

                            <p className="text-secondary fs-5 mb-5 contact-description">
                                Have questions about membership, training, or our gym?
                                Contact us and our team will be happy to help you.
                            </p>

                            {/* Phone */}
                            <div className="contact-item d-flex align-items-center mb-4">

                                <div className="contact-icon bg-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                                    <i className="bi bi-telephone-fill fs-5"></i>
                                </div>

                                <div className="ms-3">
                                    <p className="text-secondary mb-1">
                                        Call Us
                                    </p>

                                    <h5 className="mb-0 fw-bold">
                                        +91 7050093475
                                    </h5>
                                </div>

                            </div>

                            {/* Email */}
                            <div className="contact-item d-flex align-items-center mb-4">

                                <div className="contact-icon bg-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                                    <i className="bi bi-envelope-fill fs-5"></i>
                                </div>

                                <div className="ms-3">
                                    <p className="text-secondary mb-1">
                                        Email Us
                                    </p>

                                    <h5 className="mb-0 fw-bold">
                                        sharvan@gmail.com
                                    </h5>
                                </div>

                            </div>

                            {/* Address */}
                            <div className="contact-item d-flex align-items-start mb-4">

                                <div className="contact-icon bg-danger rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                                    <i className="bi bi-geo-alt-fill fs-5"></i>
                                </div>

                                <div className="ms-3">
                                    <p className="text-secondary mb-1">
                                        Visit Us
                                    </p>

                                    <h5 className="mb-0 fw-bold contact-address">
                                        H 44, Gupta Colony, S.O,
                                        Anandnagar, Bhopal,
                                        Madhya Pradesh - 462022
                                    </h5>
                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="d-flex flex-wrap gap-2 mt-3">

                                <a
                                    href="https://www.google.com/maps/dir/23.2553068,77.4880351/Aarav+gym+and+fitness+club+branch+2,+H+44,+Gupta+colony,+S.O,+Anandnagar,+Bhopal,+Madhya+Pradesh+462022/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-danger px-4 py-3 fw-bold contact-direction-btn"
                                >
                                    <i className="bi bi-geo-alt-fill me-2"></i>
                                    Get Directions
                                </a>

                                <a
                                    href="https://wa.me/917050093475"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-success px-4 py-3 fw-bold contact-whatsapp-btn"
                                >
                                    <i className="bi bi-whatsapp me-2"></i>
                                    WhatsApp
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-7">

                        <div className="contact-form-card bg-dark rounded-4 p-4 p-lg-5 border border-secondary">

                            <h3 className="fw-bold mb-2">
                                Send Us A Message
                            </h3>

                            <p className="text-secondary mb-4">
                                Fill out the form and our team will get back to you.
                            </p>

                            <form onSubmit={handleSubmit}>

                                <div className="row g-3">

                                    {/* Full Name */}
                                    <div className="col-md-6">
                                        <label className="form-label">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="form-control contact-input"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="col-md-6">
                                        <label className="form-label">
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-control contact-input"
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="col-12">
                                        <label className="form-label">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control contact-input"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="col-12">
                                        <label className="form-label">
                                            Your Message
                                        </label>

                                        <textarea
                                            rows="5"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="form-control contact-input contact-textarea"
                                            placeholder="Write your message..."
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Submit */}
                                    <div className="col-12">
                                        <button
                                            type="submit"
                                            className="btn btn-danger w-100 py-3 fw-bold contact-submit-btn"
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

