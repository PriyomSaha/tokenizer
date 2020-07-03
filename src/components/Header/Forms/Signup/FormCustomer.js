import React, { useState, useEffect } from 'react'
import { Form, InputGroup, Modal, Button } from 'react-bootstrap'
import Alert from './Alert'
import { firebaseApp } from "../../../../firebase"

function FormCustomer() {
    const axios = require("axios");

    //Input Fields
    const [name, setName] = useState('')
    const [uName, setuName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEamil] = useState('')
    const [zip, setZip] = useState('')
    const [city, setCity] = useState("");
    const [password, setPassword] = useState('')

    //Start Track Location
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const [change, setChange] = useState(false)

    navigator.geolocation.getCurrentPosition((position) => {

        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    });
    const getLocation = async () => {
        await setChange(false)

        if (!change) {
            setCity("Loading...")
        }

        await navigator.geolocation.getCurrentPosition((position) => {

            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });

        if (latitude !== 0 && longitude !== 0) {
            await axios({
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
                    setChange(true);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    //End Track Location

    //Start password toggle and validate
    //toggle
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
    //validate
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
                setText('Strong Password is a combination of CapitalLetters, SmallLetters, Numbers and Symbols.')
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

                    var symbol = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
                    if (symbol.test(password))
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
                if (valiadtionTestCount === 3) {
                    setShow(true)
                    setcolor('#28a745')//Green
                    setText('Strong')
                }
                if (valiadtionTestCount === 4) {
                    setShow(true)
                    setcolor('#28a745')//Green
                    setText('Very Strong')
                }
            }
        }
    }, [password, focus])
    //End password toggle and validate

    /*Create Node Name => Validate Mobile Number length and email
        validity check of node name => 
        (if !present)Store to database => 
        (else)Show alert to change field*/
    var error = false
    var errorMsg = ''

    const validate = () => {
        if (mobile.length != 10) {
            error = true
            errorMsg ="Mobile Number"
            setMobile("")
        }
        var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        if (!email.match(mailformat)) {
            if (error === true) {
                errorMsg = errorMsg + " , E-mail"
            }
            else {
                errorMsg = errorMsg + "E-mail"
            }
            setEamil("")
        }

        if(error === true){
            alert("Invalid " + errorMsg);
            error = false
            errorMsg = ''
        }
    }
    const storeToDatabae = async () => {
        if(name.length === 0 || email.length === 0 || mobile.length === 0 ||
            uName.length === 0 || zip.length ===0 ){

                alert("You need to fill all the fields");
                return;
            }
            
        await validate(); //Mobile Number length and email validation

        //If Mobile and Email format are correct check if the same data occurs in DB 
        if (error === false) {
            await firebaseApp
                .firestore()
                .collection("userProfile/")
                .get().then((snapshot) => {
                    const dbuName = snapshot.docs.find(doc => (uName === doc.data().User_name));
                    const dbmobile = snapshot.docs.find(doc => (mobile === doc.data().Mobile));
                    const dbemai = snapshot.docs.find(doc => (email === doc.data().E_mail));
                    if (dbuName) {
                        errorMsg = "User Name"
                        error = true
                        setuName("");
                    }
                    if (dbmobile) {
                        if (error === true) {
                            errorMsg = errorMsg + " , Mobile Number"
                        }
                        else {
                            errorMsg = errorMsg + "Mobile Number"
                        }
                        error = true
                        setMobile("");
                    }
                    if (dbemai) {
                        if (error === true) {
                            errorMsg = errorMsg + " , Email"
                        }
                        else {
                            errorMsg = errorMsg + "Email"
                        }
                        error = true
                        setEamil("");
                    }
                });
        }

        //If No Error is there enter the data to DB
        if (error === false) {

            await firebaseApp
                .firestore()
                .collection('userProfile/')
                .add({
                    Full_Name: name,
                    User_name: uName,
                    E_mail: email,
                    Mobile: mobile,
                    Password: password,
                    Zip: zip,
                    City: city
                })
        }

        else {
            alert(errorMsg + " Already Present");
            error = false
            errorMsg = ''
        }

    }

    return (
        <>
            <Form>
                <Form.Group controlId="formGridName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your name"
                        value={name} onChange={e => setName(e.target.value)} />
                </Form.Group>

                <Form.Row>
                    <Form.Group className="col-sm-6" controlId="formGridUsername">
                        <Form.Label>User Name</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="uname" placeholder="username"
                                value={uName} onChange={e => setuName(e.target.value)} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="col-sm-6" controlId="formGridmobileNumber">
                        <Form.Label>Mobile Number</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>+91</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="number" placeholder="Mobile Number"
                                value={mobile} onChange={e => setMobile(e.target.value)} />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group className="col-sm-6" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            value={email} onChange={e => setEamil(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="col-sm-6" controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={passwordType} placeholder="Password"
                            value={password} onChange={e => setPassword(e.target.value)}
                            onFocus={() => setFocus(true)} />
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
                        <Form.Control placeholder="Click the icon to Locate"
                            value={city} readOnly />
                        <span className="location" onClick={getLocation}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                        </span>
                    </Form.Group>

                    <Form.Group className="col-sm-5" controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="number" placeholder="Enter Pin-code"
                            value={zip} onChange={e => setZip(e.target.value)} />
                    </Form.Group>
                </Form.Row>
            </Form>
            <Modal.Footer className="pt-2">
                <Button variant="primary" block={true} onClick={storeToDatabae}>Sign Up</Button>
            </Modal.Footer>
        </>
    )
}

export default FormCustomer
