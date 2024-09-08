import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../images/PSITS-logo.png'

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Left-aligned brand/logo */}
        <Navbar.Brand href="/">
          <img
            src={Logo} // Replace with the path to your logo
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {' '}NDKC-PSITS
        </Navbar.Brand>
        
        {/* Navbar toggle for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Right-aligned navigation links */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/topics" className="nav-link">Topics</Nav.Link>
            <Nav.Link as={Link} to="/events" className="nav-link">Events</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
