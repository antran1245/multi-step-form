import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import '../sass/personal.scss'

export default function Personal() {
    return(
            <Col xs={11} sm={12} lg={6} id="personal">
                <div>
                    <h1>Personal info</h1>
                    <p className='detail'>Please provide your name, email address, and phone number.</p>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder='e.g. Stephen King'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="text" placeholder='e.g. stephenking@lorem.com'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder='e.g. +1 234 567 890'/>
                        </Form.Group>
                    </Form>
                </div>
                <Button>Next Step</Button>
            </Col>
    )
}