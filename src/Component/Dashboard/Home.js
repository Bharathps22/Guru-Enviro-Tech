// GridExample.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function GridExample () {
  return (
    <Container>
      <Row>
        <Col md={4} className="bg-info text-white">
          Dashboard V1
        </Col>
        <Col md={4} className="bg-success text-white">
        Dashboard V2
        </Col>
        <Col md={4} className="bg-warning text-white">
        Dashboard V3
        </Col>
      </Row>
    </Container>
  );
};

export default GridExample;
