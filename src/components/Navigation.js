import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navigation() {
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" variant="dark" id='navbar'>
      <Container>
        <Navbar.Brand href="#home">Teagrin Forde Full-Stack Web Developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Projects</Nav.Link>
            <Nav.Link href="#deets">Skills&Tools</Nav.Link>
            <Nav.Link href="#deets">Testimonials</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              My Story
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};