import React from 'react'
import { Col, Button } from 'react-bootstrap'
import '../sass/addon.scss'

type AddonProps = {
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

export default function Addon ({setDisplay} : AddonProps) {
    return(
        <Col xs={11} sm={12} lg={8} id="addon">
            <div>
                <h1>Select your plan</h1>
                <p className='detail'>You have the option of monthly or yearly billing.</p>
                
            </div>
            <div className='button-group'>
                <p onClick={() => setDisplay('plan')}>Go Back</p>
                <Button>Next Step</Button>
            </div>
        </Col>
    )
}