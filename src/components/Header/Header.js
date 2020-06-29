import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Login from './Login/Login';
import Signup from './Signup/Signup';


function Header() {
    // LOG IN
    const [showLogin, setShowLogin] = useState(false);
    const handleShowlogin = () => setShowLogin(true);

    //SIGN UP
    const [showSignup, setShowSignup] = useState(false);
    const handleShowSignup = () => setShowSignup(true);
    return (
        <>
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="nav-container">
            <Navbar.Brand className="brand" href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"/>
                <Nav className="text-center">
                    <Nav.Link href="#" className="text-light">Home</Nav.Link>
                    <Nav.Link href="#" className="text-light" onClick={handleShowlogin}>LogIn</Nav.Link>
                    <Nav.Link href="#" className="text-light" onClick={handleShowSignup}>SignUp</Nav.Link>
                    <NavDropdown title="Shop Type" id="collasible-nav-dropdown" className="text-light text-center dropdown-element">
                        <NavDropdown.Item className="text-center links"><Link to='/fastfood'>Fast Food</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-center links"><Link to='/grocery'>Grocery</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-center links"><Link to='/cloth'>Cloathing</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-center links"><Link to='/vegetable'>Vegetable</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Login show={showLogin} setShow={setShowLogin}/>
        <Signup show={showSignup} setShow={setShowSignup}/>
        </>
    )
}

export default Header
