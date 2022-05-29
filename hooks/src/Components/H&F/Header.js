import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import "./Header.css"
function Header() {
  return (
    <div>
         <Navbar collapseOnselect fixed="top" expand="sm" bg="dark" variant="dark">
    <Container>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
    <Navbar.Brand >MTechServices</Navbar.Brand>

    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="services">Services</Nav.Link>
      <Nav.Link href="about">About</Nav.Link>
      <Nav.Link href="contact">Contact</Nav.Link>
    
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
 
    </div>
  )
}

export default Header