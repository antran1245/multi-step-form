import React, { useEffect, useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import '../sass/finishing.scss'

interface FinishingProps {
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
    form: {
        name: string;
        email: string;
        phone: string
    };
    activePlan: {
        title: string;
        cost: number;
        type: string;
    };
    addons: {
        title? : string;
        cost? : number
    }[];
}

export default function Finishing({setDisplay, form, activePlan, addons} : FinishingProps) {
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        let mult = activePlan.type === 'Monthly'? 1 : 10
        let sum = activePlan.cost
        for(const item of addons) {
            sum += item.cost? item.cost*mult : 0
        }
        setTotal(sum)
    }, [activePlan, addons])

    return(
        <Col xs={11} sm={11} lg={8} id="finishing">
            <div>
                <h1>Finishing up</h1>
                <p className='detail'>Double-check everything looks OK before confirming.</p>
                <Row className='cart'>
                    <div className='plan'>
                        <div>
                            <p className='title'>{activePlan.title}</p>
                            <p className='change' onClick={() => setDisplay('plan')}><u className='subtitle'>Change</u></p>
                        </div>
                        {
                            activePlan.type === 'Monthly'?
                            <p className='price'>${activePlan.cost}/mo</p> :
                            <p className='price'>${activePlan.cost}/yr</p>
                        }
                    </div>
                    {addons.map((item, index) => {
                        return <div key={index} className='service'>
                                    <p className='subtitle'>{item.title}</p>
                                    {
                                        activePlan.type === 'Monthly'?
                                        <p className='price'>${item.cost}/mo</p> :
                                        <p className='price'>${Number(item.cost)*10}/yr</p>
                                    }
                                </div>
                    })}
                </Row>
                <div className='total'>
                    <p className='subtitle'>Total (per {activePlan.type === 'Monthly'? 'month' : 'year'})</p>
                    <p className="price">+${total}/{activePlan.type === 'Monthly'? 'mo' : 'yr'}</p>
                </div>
            </div>
            <div className='button-group'>
                <p onClick={() => setDisplay('addon')}>Go Back</p>
                <Button onClick={() => setDisplay('summary')}>Confirm</Button>
            </div>
        </Col>
    )
}