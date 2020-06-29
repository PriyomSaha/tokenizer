import React from 'react'
import { Form, Button, Row } from 'react-bootstrap'

function Login() {
    return (
        <Row className="justify-content-center" >
            <Form className="form-container col-12 col-sm-6 col-md-3">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-block">
                    Submit
            </Button>
            </Form>
        </Row>
    )
}

export default Login
