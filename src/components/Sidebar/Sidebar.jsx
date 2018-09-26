import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import dashboardRoutes from "../../routes/dashboard.jsx";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
    }

    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this))
    }

    render() {
        return (
            <div id="sidebar" className="sidebar">
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        {dashboardRoutes.map((prop, key) => {
                            if (!prop.redirect)
                                return (
                                    <li key={key}>
                                        <NavLink
                                            to={prop.path}
                                            className="nav-link"
                                            activeClassName="active"
                                        >
                                            <i className={prop.icon} />
                                            {/* <p>{prop.name}</p> */}
                                        </NavLink>
                                    </li>
                                );
                            return null;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar