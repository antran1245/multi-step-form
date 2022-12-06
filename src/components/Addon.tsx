import React, { useEffect, useRef, useState} from 'react'
import { Col, Button, Row } from 'react-bootstrap'
import '../sass/addon.scss'

type AddonProps = {
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
    setAddons: React.Dispatch<React.SetStateAction<{
        title? : string;
        cost? : number
    }[]>>;
    addons: {
        title? : string;
        cost? : number
    }[];
}

export default function Addon ({setDisplay, setAddons, addons} : AddonProps) {
    const [selected, setSelected] = useState<{'Online service': boolean, 'Larger storage': boolean, 'Customizable profile': boolean} | any>({'Online service': false, 'Larger storage': false, 'Customizable profile': false})
    let obj = useRef({...selected})

    /**
     * Show the selected/checked options
     */
    useEffect(() => {
        for(let i = 0; i < addons.length; i++) {
            obj.current = {...obj.current, [`${addons[i].title}`] : true}
            setSelected({...obj.current})
        }
    }, [addons])
    /**
     * Push the service choosen into the addons.
     * Or
     * Remove the service choosen if it is in the addons.
     * @param service string -> connecting to the name of the service box
     * @param cost number -> cost of service
     */
    const selectedAddon = (service: string, cost: number) => {
        if(!(selected[service])) {
            setAddons([...addons, {title: service, cost: 1}])
            setSelected({...selected, [service]: true})
        } else {
            for(let i = 0; i < addons.length; i++) {
                if(addons[i].title === service) {
                    addons.splice(i, 1)
                    setAddons([...addons])
                    obj.current = {...obj.current, [service]: false}
                    setSelected({...obj.current})
                    break
                }
            }
        }
    }
    return(
        <Col xs={11} sm={12} lg={8} id="addon">
            <div>
                <h1>Pick add-ons</h1>
                <p className='detail'>You have the option of monthly or yearly billing.</p>
                <Row className={`${selected['Online service']? 'active' : null}`} onClick={() => selectedAddon('Online service', 1)}>
                    <Col xs={2} md={2}>
                        <input type="checkbox" readOnly checked={selected['Online service']}/>
                    </Col>
                    <Col>
                        <p className='title'>Online service</p>
                        <p className='detail'>Access to multiplayer games</p>
                    </Col>
                    <Col xs={2}>
                        <p className='cost'>+$1/mo</p>
                    </Col>
                </Row>
                <Row className={`${selected['Larger storage']? 'active' : null}`} onClick={() => selectedAddon('Larger storage', 2)}>
                    <Col xs={2} md={2}>
                        <input type="checkbox" readOnly checked={selected['Larger storage']}/>
                    </Col>
                    <Col>
                        <p className='title'>Larger storage</p>
                        <p className='detail'>Extra 1TB of cloud save</p>
                    </Col>
                    <Col xs={2}>
                        <p className='cost'>+$2/mo</p>
                    </Col>
                </Row>
                <Row className={`${selected['Customizable profile']? 'active' : null}`} onClick={() => selectedAddon('Customizable profile', 2)}>
                    <Col xs={2} md={2}>
                        <input type="checkbox" readOnly checked={selected['Customizable profile']}/>
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