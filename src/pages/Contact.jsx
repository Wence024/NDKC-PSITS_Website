// src/Contact.jsx

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import '../styles/Contact.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(null); // State for alert message

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
      .send("service_h4d2drg", "template_anxl0dm", formData, "EKWaVB39TyQnW84da")
      .then((response) => {
        setShowAlert({ type: "success", message: "Message sent successfully!" });
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        setShowAlert({ type: "danger", message: "Failed to send message." });
        console.error("FAILED...", error);
      });

    // Clear form data after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container fluid className="contact-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="text-center mb-4">Contact Us</h2>
          {showAlert && (
            <Alert variant={showAlert.type} onClose={() => setShowAlert(null)} dismissible>
              {showAlert.message}
            </Alert>
          )}
          <Form onSubmit={handleSubmit} className="contact-form bg-dark text-light p-4 rounded shadow-lg">
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
