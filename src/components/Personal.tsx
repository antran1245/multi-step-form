import React from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import '../sass/personal.scss'

type PersonalProps = {
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
    setForm: React.Dispatch<React.SetStateAction<{
        name: string;
        email: string;
        phone: string
    }>>;
    form: {
        name: string;
        email: string;
        phone: string
    }
}

export default function Personal({ setDisplay, setForm, form } : PersonalProps) {
    return(
            <Col xs={11} sm={12} lg={6} id="personal">
                <div>
                    <h1>Personal info</h1>
                    <p className='detail'>Please provide your name, email address, and phone number.</p>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder='e.g. Stephen King' value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="text" placeholder='e.g. stephenking@lorem.com' value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder='e.g. +1 234 567 890' value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}/>
                        </Form.Group>
                    </Form>
                </div>
                <div className='button-container'>
                    <Button onClick={() => setDisplay('plan')}>Next Step</Button>
                </div>
            </Col>
    )
}