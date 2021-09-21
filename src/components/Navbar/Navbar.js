import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './style.css';

function Header (){
    return(
        <Navbar className="Nav">
            <Container>
                <Navbar.Brand href="#Callum">Callum White</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Features</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        {/* Dropdown to all social links */}
              </Nav>
            </Container>
  </Navbar>
    )
}

export default Header;