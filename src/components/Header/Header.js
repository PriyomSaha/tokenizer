import React,{useState} from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Login from './Login';


function Header() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="nav-container">
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"/>
                <Nav className="text-right">
                    <Nav.Link href="#" className="text-light">Home</Nav.Link>
                    <NavDropdown title="Shop Type" id="collasible-nav-dropdown" className="text-light">
                        <NavDropdown.Item className="text-center">Fast Food</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-center">Grocery</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-center">Cloathing</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-center">Vagetable</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" className="text-light" onClick={handleShow}>Login</Nav.Link>
                    <Nav.Link href="#" className="text-light">SignUp</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Login show={show} setShow={setShow}/>
        </>
    )
}

export default Header
