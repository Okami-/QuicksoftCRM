import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import dashboardRoutes from "../../routes/dashboard.jsx";

class Sidebar extends Component {
    render() {
        return (
            <div
                id="sidebar"
                className="sidebar"
            >
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
                                            <p>{prop.name}</p>
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