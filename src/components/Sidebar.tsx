import React from 'react'
import { Nav, Col } from 'react-bootstrap'
import desktopSidebar from '../assets/images/bg-sidebar-desktop.svg'
import mobileSidebar from  '../assets/images/bg-sidebar-mobile.svg'
import '../sass/sidebar.scss'

export default function Sidebar() {
    return(
        <Col xs={12} md={6} id="steps-box">
            <img src={desktopSidebar} alt="desktop sidebar" className='d-none d-md-block'/>
            <img src={mobileSidebar} alt="mobile sidebar" className='d-block d-md-none'/>
            <Nav>
                <Nav.Link>
                    <p className='circle'>1</p>
                    <div className='nav-type d-none d-md-block'>
                        <p>STEP 1</p>
                        <p>YOUR INFO</p>
                    </div>
                </Nav.Link>
                <Nav.Link>
                    <p className='circle'>2</p>
                    <div className='nav-type d-none d-md-block'>
                        <p>STEP 2</p>
                        <p>SELECT PLAN</p>
                    </div>
                </Nav.Link>
                <Nav.Link>
                    <p className='circle'>3</p>
                    <div className='nav-type d-none d-md-block'>
                        <p>STEP 3</p>
                        <p>ADD-ONS</p>
                    </div>
                </Nav.Link>
                <Nav.Link>
                    <p className='circle'>4</p>
                    <div className='nav-type d-none d-md-block'>
                        <p>STEP 4</p>
                        <p>SUMMARY</p>
                    </div>
                </Nav.Link>
            </Nav>
        </Col>
    )
}