import React from 'react'
import { Modal, Button, Tabs, Tab } from 'react-bootstrap'

function Login({ show, setShow }) {

    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} centered={true} >
            <Modal.Header closeButton>
                <Modal.Title>
                    <Tabs defaultActiveKey="Customer" id="uncontrolled-tab-example">
                        <Tab eventKey="Customer" title="Customer">
                            <Modal.Body>This Login is for customer</Modal.Body>
                        </Tab>
                        <Tab eventKey="Shop" title="Shop">
                            <Modal.Body>This Login is for Shop Owner</Modal.Body>
                        </Tab>
                    </Tabs>
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="primary" block={true}>Login</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Login
