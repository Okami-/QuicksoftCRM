import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem, Navbar } from "react-bootstrap";


import dashboardRoutes from "../../routes/dashboard.jsx";

class Header extends Component {
    render() {
        return (
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Document IQ</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <NavItem eventKey={3} href="#">
                        <i className="fa fa-search" />
                        <p className="hidden-lg hidden-md">Search</p>
                    </NavItem>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header