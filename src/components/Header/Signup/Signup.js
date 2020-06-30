import React,{useState} from 'react'
import { Modal, Button, Tabs, Tab } from 'react-bootstrap'

import './Signup.css'
import FormCustomer from './FormCustomer'

function Signup({ show, setShow }) {
    /*const getLocation = ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log("latitude"+position.coords.latitude);
            console.log("longitude"+position.coords.longitude);
            });
    }*/
    const [latitude,setLatitude] = useState(0.0) ;
    const [longitude,setLongitude] = useState(0.0) ;
    const getLocation = ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            setLatitude(lat);
            setLongitude(long);
            });
    }
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} centered={true} >
            <Modal.Header closeButton>
                <Modal.Title>
                    <Tabs defaultActiveKey="Customer" id="uncontrolled-tab-example">
                        <Tab eventKey="Customer" title="Customer">
                            <Modal.Body>
                                <FormCustomer />
                            </Modal.Body>
                        </Tab>
                        <Tab eventKey="Shop" title="Shop">
                            <Modal.Body>This Signup is for Shop Owner</Modal.Body>
                        </Tab>
                    </Tabs>
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="primary" block={true} onClick={getLocation}>Sign Up</Button>
            </Modal.Footer>
            Latitude = {latitude}
            <br/>
            Longitude = {longitude}
        </Modal>
    )
}

export default Signup
