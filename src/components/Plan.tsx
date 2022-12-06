import { useState } from 'react'
import { Col, Button, Card, Row, Form } from 'react-bootstrap'
import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import '../sass/plan.scss'

type PlanProps = {
    activePlan: {
        title: string;
        cost: number;
        type: string;
    };
    setActivePlan: React.Dispatch<React.SetStateAction<{
        title: string;
        cost: number;
        type: string;
    }>>;
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
}
export default function Plan({ activePlan, setActivePlan, setDisplay } : PlanProps) {
    const [switchPlan, setSwitchPlan] = useState<boolean>(true)

    /**
     * Update activePlan when select a card
     * @param plan : string -> name of the plan
     * @param cost : number -> cost of the monthly plan
     */
    const selectedPlan = (plan: string, cost: number) => {
        let type = switchPlan? 'Monthly' : 'Yearly'
        let newCost = switchPlan? cost : cost*10
        setActivePlan({title: plan, cost: newCost, type: type})
    }

    /**
     * Update activePlan based on the term.
     * Update the term when switch is click.
     */
    const updatePlan = () => {
        if (activePlan.title !== '') {
            let type = !switchPlan? 'Monthly' : 'Yearly'
            let newCost = !switchPlan? activePlan.cost : activePlan.cost*10
            setActivePlan({...activePlan, cost: newCost, type: type})
        }
        setSwitchPlan(!switchPlan)
    }
    return(
        <Col xs={11} sm={12} lg={8} id="plan">
            <div>
                <h1>Select your plan</h1>
                <p className='detail'>You have the option of monthly or yearly billing.</p>
                <Row id="cards">
                    <Col md={4}>
                        <Card className={`h-100 ${activePlan.title === 'Arcade'? 'active' : null}`} onClick={() => selectedPlan('Arcade', 9)}>
                            <Card.Body>
                                <img src={arcade} alt="arcade"/>
                                <div>
                                    <Card.Title>Arcade</Card.Title>
                                    <Card.Subtitle>{switchPlan?'$9/mo': '$90/yr'}</Card.Subtitle>
                                    {
                                        switchPlan? null :
                                        <Card.Text>2 months free</Card.Text>
                                    }
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className={`h-100 ${activePlan.title === 'Advanced'? 'active' : null}`} onClick={() => selectedPlan('Advanced', 12)}>
                            <Card.Body>
                                <img src={advanced} alt="advanced"/>
                                <div>
                                    <Card.Title>Advanced</Card.Title>
                                    <Card.Subtitle>{switchPlan?'$12/mo': '$120/yr'}</Card.Subtitle>
                                    {
                                        switchPlan? null :
                                        <Card.Text>2 months free</Card.Text>
                                    }
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className={`h-100 ${activePlan.title === 'Pro'? 'active' : null}`} onClick={() => selectedPlan('Pro', 15)}>
                            <Card.Body>
                                <img src={pro} alt="pro"/>
                                <div>
                                    <Card.Title>Pro</Card.Title>
                                    <Card.Subtitle>{switchPlan?'$15/mo': '$150/yr'}</Card.Subtitle>
                                    {
                                        switchPlan? null :
                                        <Card.Text>2 months free</Card.Text>
                                    }
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Form>
                    <Form.Label>Monthly</Form.Label>
                    <label className='switch'>
                        <input type={'checkbox'} onClick={() => updatePlan()}/>
                        <span className='slider'></span>
                    </label>
                    <Form.Label>Yearly</Form.Label>
                </Form>
            </div>
            <div className='button-group'>
                <p onClick={() => setDisplay('personal')}>Go Back</p>
                <Button  onClick={() => setDisplay('addon')}>Next Step</Button>
            </div>
        </Col>
    )
}