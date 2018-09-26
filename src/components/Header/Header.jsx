import React, { Component } from "react";
import { Navbar, FormGroup, FormControl, Button } from "react-bootstrap";


import dashboardRoutes from "../../routes/dashboard.jsx";

class Header extends Component {

    constructor(props) {
        super(props);
        this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
        this.state = {
            sidebarExists: false,
        };
    }

    mobileSidebarToggle(e) {
        if (this.state.sidebarExists === false) {
            this.setState({
                sidebarExists: true
            });
        }
        e.preventDefault();
        document.documentElement.classList.toggle("nav-open");
    }

    render() {
        return (
            <Navbar fluid>
                <Navbar.Toggle onClick={this.mobileSidebarToggle} />
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Document IQ</a>
                    </Navbar.Brand>
                    {/* <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form> */}
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default Header