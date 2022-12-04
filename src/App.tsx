import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div>
      <Container fluid id="form-box">
        <Row>
          <Sidebar/>
          <Col xs={12} md={6}>hello</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
