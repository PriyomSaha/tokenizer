import React, { useState, useEffect } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

function FormCustomer() {
    const axios = require("axios");

    //Track Location
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const [city, setCity] = useState("");

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
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
    }, [axios,latitude,longitude])

    //password Toogle
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

            <Form.Row>
                <Form.Group className="col-md-7" controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="Click The Icon To locate" value={city} />
                    <span className="location" onClick={getLocation}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                    </span>
                </Form.Group>

                <Form.Group className="col-md-5" controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="number" placeholder="Enter Pin-code" />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default FormCustomer
