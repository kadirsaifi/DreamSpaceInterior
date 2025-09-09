import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Footer from "../footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_70mbbmw", // ✅ Replace with EmailJS Service ID
        "template_tthucwj", // ✅ Replace with EmailJS Template ID
        formData,
        "gr7sreZnMAN9xlcZ6" // ✅ Replace with EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Message Sent Successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("❌ Failed to send message. Try again!");
          console.error(error);
        }
      );
  };

  return (
    <>
      <section className="contact-page">
        {/* Header */}
        <div className="contact-hero">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Get in touch with our team today.</p>
        </div>

        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              <i className="fa-solid fa-location-dot"></i> Dubai, UAE
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> +971 55 123 4567
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> info@dreamspace.com
            </p>

            <div className="contact-social">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="contact-map">
          <iframe
            title="Dream Space Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.548376449385!2d55.270782!3d25.204849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434d2b9db3db%3A0x9f62b2f4f0c2f6d0!2sDubai!5e0!3m2!1sen!2sae!4v1670000000000!5m2!1sen!2sae"
            width="100%"
            height="350"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
