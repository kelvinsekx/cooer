import React from "react";
import {Route, Redirect} from "react-router-dom";
import auth from "../helpers/auth.helper";

const PRIVATEROUTE = ({component: Component, ...rest})=>
<Route {...rest} render={props => (
auth.isAuthenticated() ? 
<Component {...props} /> : (
    <Redirect to={{
        pathname: "/?=__rd", 
        state: {from: props.location}}} 
    />
)
)} />

export default PRIVATEROUTE;