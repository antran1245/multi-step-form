import React from 'react'
import { Col, Button, Row } from 'react-bootstrap'
import '../sass/addon.scss'

type AddonProps = {
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

export default function Addon ({setDisplay} : AddonProps) {
    return(
        <Col xs={11} sm={12} lg={8} id="addon">
            <div>
                <h1>Pick add-ons</h1>
                <p className='detail'>You have the option of monthly or yearly billing.</p>
                <Row>
                    <Col xs={2} md={2}>
                        <input type="checkbox"/>
                    </Col>
                    <Col>
                        <p className='title'>Online service</p>
                        <p className='detail'>Access to multiplayer games</p>
                    </Col>
                    <Col xs={2}>
                        <p className='cost'>+$1/mo</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} md={2}>
                        <input type="checkbox"/>
                    </Col>
                    <Col>
                        <p className='title'>Larger storage</p>
                        <p className='detail'>Extra 1TB of cloud save</p>
                    </Col>
                    <Col xs={2}>
                        <p className='cost'>+$2/mo</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} md={2}>
                        <input type="checkbox"/>
                    </Col>
                    <Col>
                        <p className='title'>Customizable profile</p>
                        <p className='detail'>Custom theme on your profile</p>
                    </Col>
                    <Col xs={2}>
                        <p className='cost'>+$2/mo</p>
                    </Col>
                </Row>
            </div>
            <div className='button-group'>
                <p onClick={() => setDisplay('plan')}>Go Back</p>
                <Button>Next Step</Button>
            </div>
        </Col>
    )
}