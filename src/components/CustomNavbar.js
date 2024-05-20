// src/CustomNavbar.js

import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Button, Form } from 'react-bootstrap';
import logo from './../assets/farmacia-san-benito-white-logo.png';
import './../App.css';

function CustomNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="navbar-custom" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="250"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar-nav-custom">
              <Nav.Link className="nav-link-custom" href="#home">HOME</Nav.Link>
              <Nav.Link className="nav-link-custom" href="#about">CONÓCENOS</Nav.Link>
              <Nav.Link className="nav-link-custom" href="#products">PRODUCTOS</Nav.Link>
              <Nav.Link className="nav-link-custom" href="#branches">SUCURSALES</Nav.Link>
              <Nav.Link className="nav-link-custom" href="#services">SERVICIOS</Nav.Link>
              <Nav.Link className="nav-link-custom" href="#promotions">PROMOCIONES</Nav.Link>
              <Nav.Link className="nav-link-custom" href="#contact">CONTÁCTANOS</Nav.Link>
              <Nav.Link className="nav-link-custom" onClick={handleShow}>LOGIN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su contraseña" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Iniciar Sesión
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CustomNavbar;
