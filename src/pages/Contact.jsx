import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init("EKWaVB39TyQnW84da");
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send message.");
      });

    // Clear form data after submission
    setFormData({
      name: "",
      email: "",
      signature: "",
    });
  };

  return (
    <div className="contacts-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contacts;
