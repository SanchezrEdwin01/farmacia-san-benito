import React from 'react';
import { FaFacebook, FaPhone, FaPercentage } from 'react-icons/fa';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './InfoSection.css';

function InfoSection() {
  return (
    <Container fluid className="info-section mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
          <a href="https://www.facebook.com/FarmaciasSanBenito/" target="_blank" rel="noopener noreferrer" className="card-link">
            <Card className="info-card">
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={3} className="icon icon-facebook">
                    <FaFacebook size={50} />
                  </Col>
                  <Col xs={9}>
                    <Card.Title>Farmacias San Benito</Card.Title>
                    <hr />
                    <Card.Text>
                      Sé parte de nuestra comunidad en Facebook.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
          <Card className="info-card">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={3} className="icon icon-phone">
                  <FaPhone size={50} />
                </Col>
                <Col xs={9}>
                  <Card.Title>Contáctanos</Card.Title>
                  <hr />
                  <Card.Text>
                    Te invitamos a mantenerte en contacto con nosotros. Dinos, ¿en qué podemos ayudarte?
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
          <Card className="info-card">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={3} className="icon icon-percentage">
                  <FaPercentage size={50} />
                </Col>
                <Col xs={9}>
                  <Card.Title>Promociones</Card.Title>
                  <hr />
                  <Card.Text>
                    Descubre las mejores promociones y disfruta de grandes descuentos.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default InfoSection;
