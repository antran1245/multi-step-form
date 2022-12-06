import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Personal from './components/Personal';
import Plan from './components/Plan';
import Addon from './components/Addon';
import Finishing from './components/Finishing';
import Summary from './components/summary';
import './App.css';
import './sass/App.scss'

function App() {
  const [display, setDisplay] = useState<string>('personal')
  // Personal Form
  const [form, setForm] = useState<{name: string, email: string, phone: string}>({name: '', email: '', phone: ''})

  // Plan selected
  const [switchPlan, setSwitchPlan] = useState<boolean>(true)
  const [activePlan, setActivePlan] = useState<{title: string, cost: number, type: string}>({title: '', cost: 0, type: 'Monthly'})

  // Add on
  const [addons, setAddons] = useState<{title?: string; cost?: number | 0}[]>([])
  return (
    <div>
      <Container fluid id="form-box">
        <Container>
          <Row>
            <Sidebar display={display} setDisplay={setDisplay}/>
            <Col className='d-flex justify-content-center pt-0 pt-md-4'>
              {display === 'personal'? <Personal setDisplay={setDisplay} setForm={setForm} form={form}/> : null}
              {display === 'plan'? <Plan setDisplay={setDisplay} activePlan={activePlan} setActivePlan={setActivePlan} switchPlan={switchPlan} setSwitchPlan={setSwitchPlan}/> : null}
              {display === 'addon'? <Addon setDisplay={setDisplay} setAddons={setAddons} addons={addons}/> : null}
              {display === 'finishing'? <Finishing setDisplay={setDisplay} form={form} activePlan={activePlan} addons={addons}/> : null}
              {display === 'summary'? <Summary/> : null}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
