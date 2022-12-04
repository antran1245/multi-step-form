import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Personal from './components/Personal';
import './App.css';
import Plan from './components/Plan';

function App() {
  const [display, setDisplay] = useState<string>('personal')
  // Personal Form
  const [form, setForm] = useState<{name: string, email: string, phone: string}>({name: '', email: '', phone: ''})
  return (
    <div>
      <Container fluid id="form-box">
        <Container>
          <Row>
            <Sidebar display={display} setDisplay={setDisplay}/>
            <Col className='d-flex justify-content-center pt-0 pt-md-4'>
              {display === 'personal'? <Personal setDisplay={setDisplay} setForm={setForm} form={form}/> : null}
              {display === 'plan'? <Plan/> : null}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
