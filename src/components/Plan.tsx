import { Col, Button, Card, Row, Form } from 'react-bootstrap'
import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import '../sass/plan.scss'

export default function Plan() {
    return(
        <Col xs={11} sm={12} lg={8} id="plan">
            <div>
                <h1>Personal info</h1>
                <p className='detail'>Please provide your name, email address, and phone number.</p>
                <Row id="cards">
                    <Col md={4}>
                        <Card className='h-100'>
                            <Card.Body>
                                <img src={arcade} alt="arcade"/>
                                <Card.Title>Arcade</Card.Title>
                                <Card.Subtitle>$9/mo</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='h-100'>
                            <Card.Body>
                                <img src={advanced} alt="advanced"/>
                                <Card.Title>Advanced</Card.Title>
                                <Card.Subtitle>$12/mo</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='h-100'>
                            <Card.Body>
                                <img src={pro} alt="pro"/>
                                <Card.Title>Pro</Card.Title>
                                <Card.Subtitle>$15/mo</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Form>
                    <Form.Label>Monthly</Form.Label>
                    <label className='switch'>
                        <input type={'checkbox'}/>
                        <span className='slider'></span>
                    </label>
                    <Form.Label>Yearly</Form.Label>
                </Form>
            </div>
            <div className='button-group'>
                <p>Go Back</p>
                <Button>Next Step</Button>
            </div>
        </Col>
    )
}