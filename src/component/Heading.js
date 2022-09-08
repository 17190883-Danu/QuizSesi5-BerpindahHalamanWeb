import React from "react";
import {Link} from 'react-router-dom';
import {
    Navbar,
    Container,
    NavbarBrand, 
    Nav,
    NavItem
} from 'reactstrap';

export const Heading = () => {
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href= "/">Aplikasi CRUD</NavbarBrand>
            <Nav>
                <NavItem>
                    <Link to="/adduser" className="btn btn-primary">Add User</Link>
                </NavItem>
            </Nav>
            </Container>
        </Navbar>
    )
}

