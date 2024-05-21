import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import logo from './../assets/farmacia-san-benito-white-logo.png';
import './../App.css';

function Footer({ scrollToContactUs, scrollToHome }) {
  return (
    <Navbar className="footer-custom" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand onClick={scrollToHome} style={{ cursor: 'pointer' }}>
          <img
            src={logo}
            width="250"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Nav className="mx-auto footer-nav-custom d-none d-lg-flex">
          <Nav.Link className="footer-link-custom" onClick={scrollToHome}>HOME</Nav.Link>
          <Nav.Link className="footer-link-custom" onClick={scrollToContactUs}>CONTÁCTENOS</Nav.Link>
        </Nav>
        <Nav className="ms-auto footer-social-custom">
          <Nav.Link href="https://www.facebook.com/FarmaciasSanBenito/" target="_blank">
            <FaFacebook size={30} color="#00B7F1" />
          </Nav.Link>
          <Nav.Link href="https://twitter.com/FSanBenito" target="_blank">
            <FaTwitter size={30} color="#00B7F1" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
