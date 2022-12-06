import React from 'react'
import { Col } from 'react-bootstrap'
import thankYou from '../assets/images/icon-thank-you.svg'
import '../sass/summary.scss'

export default function Summary() {
    return(
        <Col xs={12} sm={{offset: 1, span: 11}} id="summary">
            <img src={thankYou} alt="thank you"/>
            <p className='thank'>Thank you!</p>
            <p className='message'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@example.com.</p>
        </Col>
    )
}