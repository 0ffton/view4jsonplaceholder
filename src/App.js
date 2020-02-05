import React from "react";
import {Route, Switch} from "react-router";
import {BrowserRouter as Router, Link} from "react-router-dom";
import Users from "./components/Users"
import Posts from "./components/Posts";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Users}/>
                <Route exact path="/users/:id/posts" component={Posts}/>
            </Switch>
        </Router>
    );


};

export default App;
