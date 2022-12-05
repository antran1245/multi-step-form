import React from 'react'
import { Nav, Col } from 'react-bootstrap'
import desktopSidebar from '../assets/images/bg-sidebar-desktop.svg'
import mobileSidebar from  '../assets/images/bg-sidebar-mobile.svg'
import '../sass/sidebar.scss'

interface SidebarProps {
    display: string;
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sidebar({display, setDisplay}: SidebarProps) {
    return(
        <Col xs={12} md={5} lg={3} id="steps-box">
            <img src={desktopSidebar} alt="desktop sidebar" className='d-none d-md-block'/>
            <img src={mobileSidebar} alt="mobile sidebar" className='d-block d-md-none'/>
            <Nav>
                <Nav.Link onClick={() => setDisplay('personal')}>
                    <p className={`circle ${display === 'personal'? 'active' : null}`}>1</p>
                    <div className='nav-type d-none d-md-block'>
                        <p>STEP 1</p>
                        <p>YOUR INFO</p>
                    </div>
                </Nav.Link>
                <Nav.Link onClick={() => setDisplay('plan')}>
                    <p className={`circle ${display === 'plan'? 'active' : null}`}>2</p>
                    <div className='nav-type d-none d-md-block'>
                        <p>STEP 2</p>
                        <p>SELECT PLAN</p>
                    </div>
                </Nav.Link>
                <Nav.Link onClick={() => setDisplay('addon')}>
                    <p className={`circle ${display === 'addon'? 'active' : null}`}>3</p>
                    <div className='nav-type d-none d-md-block'>
                        <p>STEP 3</p>
                        <p>ADD-ONS</p>
                    </div>
                </Nav.Link>
                <Nav.Link onClick={() => setDisplay('summary')}>
                    <p className={`circle ${display === 'summary'? 'active' : null}`}>4</p>
                    <div className='nav-type d-none d-md-block'>
                        <p>STEP 4</p>
                        <p>SUMMARY</p>
                    </div>
                </Nav.Link>
            </Nav>
        </Col>
    )
}