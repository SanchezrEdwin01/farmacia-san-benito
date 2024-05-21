import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaBuilding, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './ContactUs.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado');
  };

  return (
    <Container fluid className="contact-us-section mt-4">
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <h2>Contáctenos</h2>
          <p>
            Si tienes preguntas o te gustaría saber más de nuestro extenso catálogo de productos, no dudes en contactarnos.
            ¡Será un gusto ayudarte!
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <div className="contact-info text-center">
            <p><FaBuilding className="contact-icon" /> Oficinas Centrales: (503) 2212-7200</p>
            <p><FaPhone className="contact-icon" /> Call Center/Servicio a domicilio: (503) 2525-5050</p>
            <p><FaWhatsapp className="contact-icon" /> WhatsApp: 7803-8332</p>
            <p><FaEnvelope className="contact-icon" /> Email: info@farmaciasanbenito.com</p>
            <p>Horario: Lunes a Viernes de 7:30 AM a 5:00 PM</p>
            <p>Oficinas Centrales: Plan de La Laguna, Polígono G, Lote N° 1, Antiguo Cuscatlán, La Libertad, El Salvador, C. A.</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formSubject" className="mt-3">
              <Form.Label>Asunto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el asunto"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Ingrese su mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
