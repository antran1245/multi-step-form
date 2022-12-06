import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import '../sass/finishing.scss'

export default function Finishing() {
    return(
        <Col xs={11} sm={12} lg={8} id="finishing">
            <div>
                <h1>Finishing up</h1>
                <p className='detail'>Double-check everything looks OK before confirming.</p>
                <Row className='cart'>
                    <div className='plan'>
                        <div>
                            <p className='title'>Arcade</p>
                            <p className='subtitle'><u>Change</u></p>
                        </div>
                        <p className='price'>$9/mo</p>
                    </div>
                    <hr/>
                    <div className='service'>
                        <p className='subtitle'>Online service</p>
                        <p className='price'>+$1/mo</p>
                    </div>
                    <div className='service'>
                        <p className='subtitle'>Larger storage</p>
                        <p className='price'>+$2/mo</p>
                    </div>
                </Row>
                <Row className='total'>
                    <p className='subtitle'>Total</p>
                    <p className="price">+$12/mo</p>
                </Row>
            </div>
            <div className='button-group'>
                {/* <p onClick={() => setDisplay('plan')}>Go Back</p> */}
                <Button>Next Step</Button>
            </div>
        </Col>
    )
}