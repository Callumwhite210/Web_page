import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './style.css';

function Header (){
    return(
        <Navbar className="Nav">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        {/* Dropdown to all social links */}
              </Nav>
            </Container>
  </Navbar>
    )
}

export default Header;