import { Col, Button, Card, Row, Form } from 'react-bootstrap'
import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import '../sass/plan.scss'

export default function Plan() {
    return(
        <Col xs={11} sm={12} lg={8} id="plan">
            <div>
                <h1>Select your plan</h1>
                <p className='detail'>You have the option of monthly or yearly billing.</p>
                <Row id="cards">
                    <Col md={4}>
                        <Card className='h-100'>
                            <Card.Body>
                                <img src={arcade} alt="arcade"/>
                                <div>
                                    <Card.Title>Arcade</Card.Title>
                                    <Card.Subtitle>$9/mo</Card.Subtitle>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='h-100'>
                            <Card.Body>
                                <img src={advanced} alt="advanced"/>
                                <div>
                                    <Card.Title>Advanced</Card.Title>
                                    <Card.Subtitle>$12/mo</Card.Subtitle>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='h-100'>
                            <Card.Body>
                                <img src={pro} alt="pro"/>
                                <div>
                                    <Card.Title>Pro</Card.Title>
                                    <Card.Subtitle>$15/mo</Card.Subtitle>
                                </div>
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