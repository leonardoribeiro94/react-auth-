import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./containers/User/Login/Login"
import UserDetails from "./containers/User/UserDetails";
import UserList from "./containers/User/UserList";
import NotFound from "./404";

class RouterSwitch extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/list" component={UserList} />
                    <Route path="/details" component={UserDetails} />
                    <Route path={"/404"} component={NotFound} />
                </div>
            </Router>
        )
    }
}

export default RouterSwitch;