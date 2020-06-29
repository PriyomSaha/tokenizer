import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="nav-container">
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"/>
                <Nav>
                    <Nav.Link href="#" className="text-light">Home</Nav.Link>
                    <NavDropdown title="Shop Type" id="collasible-nav-dropdown" className="text-light">
                        <NavDropdown.Item >Fast Food</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item >Grocery</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item >Cloathing</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item >Vagetable</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" className="text-light">Login</Nav.Link>
                    <Nav.Link href="#" className="text-light">SignUp</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
