import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navigation() {
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" variant="dark" id='navbar'>
      <Container>
        <Navbar.Brand href="#about">Teagrin Forde Full-Stack Web Developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skillsTools">Skills&Tools</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link eventKey={2} href="#myStory">
              My Story
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};