const WhatsAppButton = () => {
  // Gym ka WhatsApp number
  const phoneNumber = "917050093475";

  // Pre-filled message
  const message = encodeURIComponent(
    "Hello, I want to know more about PowerFit Gym membership."
  );

  // WhatsApp chat URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="position-fixed bottom-0 end-0 m-4 d-flex align-items-center justify-content-center bg-success text-white rounded-circle shadow"
      style={{
        width: "60px",
        height: "60px",
        fontSize: "30px",
        zIndex: 1050,
      }}
      aria-label="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;