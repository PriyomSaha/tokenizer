import React, { useState, useEffect } from 'react'
import { Form, InputGroup, Modal, Button } from 'react-bootstrap'
import Alert from '../Alert'

function FormCustomer() {
    const axios = require("axios");

    //Track Location
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const [city, setCity] = useState("");
    const [change, setChange] = useState(false)
    const getLocation = () => {

        if (!change) {
            setCity("Loading...")
            setChange(true)
        }

        navigator.geolocation.getCurrentPosition((position) => {

            setTimeout(() => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            }, 3000);
        });
    }

    useEffect(() => {
        axios({
            "method": "GET",
            "url": "https://geocodeapi.p.rapidapi.com/GetNearestCities",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "geocodeapi.p.rapidapi.com",
                "x-rapidapi-key": "0577cace1cmsh16549506bfab3dep1a7116jsnaf23580d2668",
                "useQueryString": true
            }, "params": {
                "latitude": latitude,
                "longitude": longitude,
                "range": "0"
            }
        })
            .then((response) => {
                if (latitude === 0 || longitude === 0)
                    setCity("");
                else
                    setCity(response.data[0].City)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [axios, latitude, longitude])

    //password toggle and validate
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
    const [password, setPassword] = useState('')

    const [color, setcolor] = useState(''); // 'success' 'danger' 'warning' 'info'
    const [focus, setFocus] = useState(false)
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')
    useEffect(() => {
        var valiadtionTestCount = 0;
        if (focus === true) {
            if (password.length === 0) {
                setShow(true)
                setcolor('#343a40')//gray
                setText('Strong Password is a combination of CapitalLetters, SmallLetters, Numbers and Symbols .')

            }
            else if (password.length > 0 && password.length < 6) {
                setShow(true)
                setcolor('#dc3545')//red
                setText('Not Accepted. Atleast 6')
            }
            else if (password.length >= 6) {
                (function () {
                    var lowerCaseLetters = /[a-z]/g;
                    if (password.match(lowerCaseLetters))
                        valiadtionTestCount += 1

                    var upperCaseLetters = /[A-Z]/g;
                    if (password.match(upperCaseLetters))
                        valiadtionTestCount += 1

                    var numbers = /[0-9]/g;
                    if (password.match(numbers))
                        valiadtionTestCount += 1

                    var symbol =/^[a-zA-Z0-9!@#$%^&*)(+=._-]{6,}$/g;
                    if (symbol.match(password))
                        valiadtionTestCount += 1

                }())

                if (valiadtionTestCount === 1) {
                    setShow(true)
                    setcolor('#ffc107')//yellow
                    setText('Very Weak')
                }
                if (valiadtionTestCount === 2) {
                    setShow(true)
                    setcolor('#17a2b8')//teal
                    setText('Weak')
                }
                if(valiadtionTestCount === 3){
                    setShow(true)
                    setcolor('#28a745')//Green
                    setText('Strong')
                }
                if(valiadtionTestCount === 4){
                    setShow(true)
                    setcolor('#28a745')//Green
                    setText('Very Strong')
                }
            }
        }
    }, [password,focus])


    return (
        <>
            <Form>
                <Form.Group controlId="formGridName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your name" />
                </Form.Group>

                <Form.Row>
                    <Form.Group className="col-sm-6" controlId="formGridmobileNumber">
                        <Form.Label>Mobile Number</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>+91</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="number" placeholder="Mobile Number" />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="col-sm-6" controlId="formGridUsername">
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
                    <Form.Group className="col-sm-6" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="col-sm-6" controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={passwordType} placeholder="Password"
                            value={password} onChange={e => setPassword(e.target.value)}
                            onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}/>
                        <span className="togglePassword" onClick={passwordToggle}><b>{passwordToggleText}</b></span>
                    </Form.Group>
                    <span className="col-sm-6"></span>
                    <span className="col-sm-6">{show ?
                        <Alert color={color} text={text} />
                        :
                        null
                    }
                    </span>
                </Form.Row>

                <Form.Row>
                    <Form.Group className="col-sm-7" controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="Click the icon to Locate" value={city} readOnly />
                        <span className="location" onClick={getLocation}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                        </span>
                    </Form.Group>

                    <Form.Group className="col-sm-5" controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="number" placeholder="Enter Pin-code" />
                    </Form.Group>
                </Form.Row>
            </Form>
            <Modal.Footer className="pt-2">
                <Button variant="primary" block={true}>Sign Up</Button>
            </Modal.Footer>
        </>
    )
}

export default FormCustomer
