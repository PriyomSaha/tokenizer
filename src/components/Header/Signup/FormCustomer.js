import React,{ useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

function FormCustomer() {
    const [passwordType, setPasswordType] = useState('password');
    const [passwordToggleText, setPasswordToggleText] = useState('Show');
    const passwordToggle = () => {
        if (passwordType === "password") {
            setPasswordType('text')
            setPasswordToggleText('Hide')
        }
        else {
            setPasswordType('password')
            setPasswordToggleText('Show')
        }
    }
    return (
        <Form>
            <Form.Group controlId="formGridName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="Enter your name" />
            </Form.Group>

            <Form.Row>
                <Form.Group className="col-md-6" controlId="formGridmobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>+91</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="number" placeholder="Mobile Number" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="col-md-6" controlId="formGridUsername">
                    <Form.Label>User Name</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="uname" placeholder="username" />
                    </InputGroup>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group className="col-md-6" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="col-md-6" controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={passwordType} placeholder="Password" />
                    <span className="togglePassword" onClick={passwordToggle}><b>{passwordToggleText}</b></span>
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
                    <Form.Control type="number" placeholder="Enter Pin-code" />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default FormCustomer
