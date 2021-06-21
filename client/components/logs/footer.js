import React from "react";
import {StyledFooter as Styles} from "./logs.styled";
import {Link} from "react-router-dom"

const LogsFooter = () =>
<Styles> 
<footer>
    <div><span>forgot password?</span></div>
    <hr/>
    <div className="c_n_a">
        <Link to="register">Create New Account</Link>
    </div>
</footer>
</Styles>;

export default LogsFooter;