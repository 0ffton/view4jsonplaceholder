import React from "react";
import {Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import axios from "axios";
import routes from "./configs/routerConfig";

const App = () => {
    axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
    return (
        <Router>
            <Switch>
                {routes.map((route, i) => (
                    <Route key={i} exact={route.exact} path={route.path} component={route.component}/>
                ))}
            </Switch>
        </Router>
    );


};

export default App;
