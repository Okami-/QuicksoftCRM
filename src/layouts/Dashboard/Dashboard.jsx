import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";

import dashboardRoutes from "../../routes/dashboard.jsx";

class Dashboard extends Component {

    componentDidUpdate(e) {
        if (e.history.action === "PUSH") {
            document.documentElement.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
            this.refs.mainPanel.scrollTop = 0;
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Sidebar />
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <Header />
                    <Switch>
                        {dashboardRoutes.map((prop, key) => {
                            if (prop.redirect)
                                return <Redirect from={prop.path} to={prop.to} key={key} />;
                            return (
                                <Route path={prop.path} component={prop.component} key={key} />
                            );
                        })}
                    </Switch>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Dashboard;