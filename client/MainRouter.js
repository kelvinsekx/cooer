import React from "react";
import {Route,Switch} from "react-router-dom";
import styled from "styled-components"

import Private from "./auth/PrivateRoute";

import { NonProtectedRoutes as nRoutes, protectedRoutes as pRoutes } from "./routes";

import Menu from "./components/menu"

const MAINROUTER = () => 
<div style={{fontFamily: "sans-serif", color: "#222"}}>
    <Switch>
        {nRoutes.map((route, i) => (
            <Route  key={i}
                exact
                {...route} />
        ))}

    <MAINSTYLES>
        <div id="main">
            <div className="menuMenu"><Menu /></div>
            <div className="body">
                {pRoutes.map(
                    (route, i) => (
                        <Private  key={i}
                            exact
                            {...route} />
                    ))
                }
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