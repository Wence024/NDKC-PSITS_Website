import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Topics() {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  const handleShow = (title, body) => {
    setModalContent({ title, body });
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="topics-container">
      <div className="card">
        <img src="https://via.placeholder.com/750x1000" alt="Workshop" />
        <h3>Workshops and Trainings</h3>
        <p>
          Explore various workshops and training sessions to enhance your
          skills.
        </p>
        <Button
          variant="primary"
          onClick={() =>
            handleShow(
              "Workshops and Trainings",
              "Explore various workshops and training sessions to enhance your skills. Workshops cover a range of topics from programming to design, ensuring there is something for everyone looking to upskill. Join our sessions to network with industry experts and other learners."
            )
          }
        >
          Read More
        </Button>
      </div>
      <div className="card">
        <img src="https://via.placeholder.com/750x1000" alt="Hackathons" />
        <h3>Hackathons and Competitions</h3>
        <p>
          Participate in hackathons and competitions to challenge yourself and
          win prizes.
        </p>
        <Button
          variant="primary"
          onClick={() =>
            handleShow(
              "Hackathons and Competitions",
              "Participate in hackathons and competitions to test your skills and compete with others. Our events offer exciting challenges, great networking opportunities, and amazing prizes for winners. Whether you are a seasoned developer or just starting, there’s a place for you."
            )
          }
        >
          Read More
        </Button>
      </div>
      <div className="card">
        <img src="https://via.placeholder.com/750x1000" alt="Outreach" />
        <h3>Community Outreach</h3>
        <p>
          Engage in community outreach programs to give back and make a
          difference.
        </p>
        <Button
          variant="primary"
          onClick={() =>
            handleShow(
              "Community Outreach",
              "Engage in community outreach programs to make a positive impact on the community. Our outreach programs include volunteering, mentorship, and local events aimed at helping those in need and fostering community spirit. Get involved and make a difference today."
            )
          }
        >
          Read More
        </Button>
      </div>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-container"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {modalContent.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalContent.body}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Topics;
