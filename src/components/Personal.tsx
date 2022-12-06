import React, { useState } from 'react'
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
    const [error, setError] = useState<{name: boolean, email: boolean, phone: boolean}>({name: false, email: false, phone: false})

    const submitForm = () => {
        setError({name: form.name === '', email: form.email === '', phone: form.phone === ''})
        if (form.name !== '' && form.email !== '' && form.phone !== '') {
            setDisplay('plan')
        }
    }
    return(
            <Col xs={11} sm={12} lg={8} id="personal">
                <div>
                    <h1>Personal info</h1>
                    <p className='detail'>Please provide your name, email address, and phone number.</p>
                    <Form>
                        <Form.Group>
                            <div className='label-group'>
                                <Form.Label>Name</Form.Label>
                                {
                                    error.name? 
                                    <p className='error'>This field is required</p> : null
                                }
                            </div>
                            <Form.Control type='text' placeholder='e.g. Stephen King' value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className={`${error.name? 'error-bar' : ''}`}/>
                        </Form.Group>
                        <Form.Group>
                            <div className='label-group'>
                                <Form.Label>Email Address</Form.Label>
                                {
                                    error.email? 
                                    <p className='error'>This field is required</p> : null
                                }
                            </div>
                            <Form.Control type="text" placeholder='e.g. stephenking@lorem.com' value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className={`${error.email? 'error-bar' : ''}`}/>
                        </Form.Group>
                        <Form.Group>
                            <div className='label-group'>
                                <Form.Label>Phone Number</Form.Label>
                                {
                                    error.phone? 
                                    <p className='error'>This field is required</p> : null
                                }
                            </div>
                            <Form.Control type="text" placeholder='e.g. +1 234 567 890' value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className={`${error.phone? 'error-bar' : ''}`}/>
                        </Form.Group>
                    </Form>
                </div>
                <div className='button-container'>
                    <Button onClick={() => submitForm()}>Next Step</Button>
                </div>
            </Col>
    )
}