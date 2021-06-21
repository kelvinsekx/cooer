import React from "react";
import {Route,Switch} from "react-router-dom";
import styled from "styled-components"
import Home from "./shared/Home";

import Private from "./auth/PrivateRoute";
import Muha from "./pages/muha";
import Register from "./pages/register";
import Street from "./pages/street";
import Ayoze from "./pages/ayoze";
import Discuss from "./pages/ayozeDiscuss";
import Profile from "./user/profile"
import EditProfile from "./pages/editProfile";

import Menu from "./components/menu"

const MAINROUTER = () => 
<div style={{fontFamily: "sans-serif", color: "#222"}}>
    <Switch>
    <Route exact 
            path="/" 
            component={Home} />
    <Route exact 
            path="/register" 
            component={Register} />
    <MAINSTYLES>
    <div id="main">
            <div className="menuMenu"><Menu /></div>
            <div className="body">
                <Private 
                    exact
                    path="/home" 
                    component={Muha}
                />
                <Private
                    exact 
                    path="/street" 
                    component={Street}
                />
                <Private 
                    exact
                    path="/ayoze" 
                    component={Ayoze}
                />
                <Private 
                    exact
                    path="/profile/:userId" 
                    component={Profile}
                />
                <Private 
                    exact
                    path="/profile/:userId/edit" 
                    component={EditProfile}
                />
                <Private 
                    exact
                    path="/ayoze/:gossiptitle/:gossipId" 
                    component={Discuss}
                />
            </div>
        </div>
        </MAINSTYLES>
    </Switch>
</div>

const MAINSTYLES = styled.div`
div#main{
    display: grid;
    grid-template-columns: 1fr 4fr;
}
@media (max-width: 540px) {
    div#main{
        grid-template-rows: 
        [nav-navEnd] 1fr [bodyStart-bodyEnd] 2rem;
        grid-template-columns: [d] 100%;
        grid-template-areas: 
        "d"
        "d";
        .menuMenu{
            grid-row: 2/3;
            position: sticky;
            bottom: 0px;
        }
        .body {
            grid-row: 1/2;
        }
    }
}
`


export default MAINROUTER;