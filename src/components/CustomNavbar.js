import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Button, Form } from 'react-bootstrap';
import logo from './../assets/farmacia-san-benito-white-logo.png';
import './../App.css';

function CustomNavbar({ scrollToContactUs, scrollToHome }) {
  const [show, setShow] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'sanchez797.edwin@gmail.com' && password === 'contraseña') {
      setIsAuthenticated(true);
      handleClose();
    } else {
      alert('Correo electrónico o contraseña incorrectos');
    }
  };

  return (
    <>
      <Navbar className="navbar-custom" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={scrollToHome} style={{ cursor: 'pointer' }}>
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
              <Nav.Link className="nav-link-custom" onClick={scrollToHome}>HOME</Nav.Link>
              <Nav.Link className="nav-link-custom" onClick={scrollToContactUs}>CONTÁCTENOS</Nav.Link>
              {isAuthenticated ? (
                <Nav.Link className="nav-link-custom">Bienvenido, Edwin</Nav.Link>
              ) : (
                <Nav.Link className="nav-link-custom" onClick={handleShow}>LOGIN</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
