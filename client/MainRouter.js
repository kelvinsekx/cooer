import React from "react";
import {Route,Switch} from "react-router-dom";
import styled from "styled-components"

import Private from "./auth/PrivateRoute";

import { NonProtectedRoutes as nRoutes, 
        protectedRoutes as pRoutes } 
from "./routes";

import Menu from "./components/menu"

const MAINROUTER = (props) =>
{
    return <div style={{fontFamily: "sans-serif", color: "#222"}}>
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
} 

const MAINSTYLES = styled.div`
div#main{
    display: grid;
    grid-template-columns: 1fr 4fr;
}
@media (max-width: 540px) {
    div#main{
        grid-template-rows: 
        [nav-navEnd] 94vh [bodyStart-bodyEnd] 6vh;
        grid-template-columns: [d] 100%;
        grid-template-areas: 
        "d"
        "d";
        .menuMenu{
            grid-row: 2/3;
            position: sticky;
            display: flex;
            align-items: center;
            border-top: 0.1px solid rgba(0,0,0,0.4);
            box-shadow: 1px 0 1px 1px rgba(150, 140, 140, 0.693);
        }
        .body {
             grid-row: 1/2;
            overflow: scroll;
        }
    }
}
`


export default MAINROUTER;