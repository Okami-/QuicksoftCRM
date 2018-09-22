import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./assets/stylesheets/main.scss";
import registerServiceWorker from './registerServiceWorker';
import indexRoutes from "./routes"

ReactDOM.render(
    <HashRouter>
        <Switch>
            {indexRoutes.map((prop, key) => {
                return <Route to={prop.path} component={prop.component} key={key} />;
            })}
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);

registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}