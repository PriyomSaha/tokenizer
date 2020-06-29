import React from 'react'
import {Form} from 'react-bootstrap'

function FormCustomer() {
    return (
        <Form>
                <Form.Group controlId="formGridName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your name" />
                </Form.Group>
            <Form.Row>
                <Form.Group className="col-md-6" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="col-md-6" controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Row>
                <Form.Group className="col-md-6" controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="Enter Zip-code" />
                </Form.Group>

                <Form.Group className="col-md-6" controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="number" placeholder="Enter Zip-code"/>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default FormCustomer
