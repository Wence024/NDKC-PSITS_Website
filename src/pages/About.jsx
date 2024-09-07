// src/About.jsx

import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/About.css';

function About() {
  const teamMembers = [
    {
      img: "https://via.placeholder.com/150",
      name: "John Doe",
      position: "President",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Jane Smith",
      position: "Vice President",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Emily Johnson",
      position: "Secretary",
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Michael Brown",
      position: "Treasurer",
    },
  ];

  return (
    <Container fluid className="about-container">
      <section className="statement-of-purpose text-center">
        <h2>Our Purpose</h2>
        <p>
          Our club is dedicated to fostering a community of learners and
          innovators in the field of Information Technology. We aim to provide
          opportunities for skill development, collaboration, and leadership
          through workshops, competitions, and community outreach. Our purpose
          is to empower members to achieve their potential and contribute
          meaningfully to the tech industry and society.
        </p>
      </section>

      <section className="our-team-section">
        <h2 className="text-center">Meet Our Team</h2>
        <Row className="our-team">
          {teamMembers.map((member, index) => (
            <Col md={3} key={index} className="team-card-wrapper">
              <Card className="team-card bg-dark text-light border-0 shadow-lg">
                <Card.Img
                  variant="top"
                  src={member.img}
                  alt={`${member.name}`}
                  className="team-img"
                />
                <Card.Body className="text-center">
                  <Card.Title className="team-name">{member.name}</Card.Title>
                  <Card.Text className="team-position">
                    {member.position}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default About;
