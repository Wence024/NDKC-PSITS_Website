import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Left-aligned brand/logo */}
        <Navbar.Brand href="/">
          <img
            src="path-to-your-logo.png" // Replace with the path to your logo
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {' '}Your Brand
        </Navbar.Brand>
        
        {/* Navbar toggle for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Right-aligned navigation links */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/topics">Topics</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;