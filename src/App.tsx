import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Personal from './components/Personal';
import './App.css';

function App() {
  return (
    <div>
      <Container fluid id="form-box">
        <Container>
          <Row>
            <Sidebar/>
            <Col className='d-flex justify-content-center pt-0 pt-md-4'>
              <Personal/>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
