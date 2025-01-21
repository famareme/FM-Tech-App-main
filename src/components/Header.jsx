import React from "react";
import Image from '../images/Logo-FM-Tech.png';
import { Navbar, Container, Nav} from 'react-bootstrap';
const Header = () => {
  return (
    <div className="header" id="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Image}
              className="content-img d-inline-block align-top"
              alt="fm-tech logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home">Accueil</Nav.Link>
              <Nav.Link href="#about">À propos</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;