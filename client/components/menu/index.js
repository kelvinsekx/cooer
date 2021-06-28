import React from "react";
import styled from "styled-components"
import { withRouter } from "react-router";

import {Link} from "react-router-dom"
import auth from "../../helpers/auth.helper"

import { FiHome, FiSliders, FiUser, FiTag, FiLifeBuoy, FiUserX, FiSmile
 } from "react-icons/fi";

const Menu = withRouter(({history})=> (
    <Styles>
        <nav>
            <div>
                <Link to="/home"><span>Kr</span></Link>
            </div>

            <div>
                <ul>
                    <li>
                        <Link to="/home" className="navIconBtn" style={isActive(history, "/home")}><span><FiHome style={{fontSize: "130%"}}/></span> <span>Home</span></Link>
                    </li>
                    <li>
                        <Link to="/ayoze" style={isActive(history, "/ayoze")}className="navIconBtn"><span><FiTag style={{fontSize: "130%"}}/></span> <span>Ayoze</span></Link>
                    </li>
                    <li>
                        <Link to="/street" style={isActive(history, "/street")}className="navIconBtn"><span><FiSliders style={{fontSize: "130%"}}/></span> <span>Street</span></Link>
                    </li>
                    <li>
                        {
                            auth.isAuthenticated() && 
                            <Link 
                                to={`/profile/${auth.isAuthenticated().user.username}`} 
                                style={isActive(history, `/profile/${auth.isAuthenticated().user.username}`)}
                                className="navIconBtn"
                            >
                                <span><FiUser style={{fontSize: "130%"}}/></span> <span>Profile</span>
                            </Link>
                        }
                    </li>
                    <li>
                        <Link to="/trending" style={isActive(history, "/trending")}className="navIconBtn">
                        <span><FiLifeBuoy style={{fontSize: "130%"}}/></span>   <span>Trending</span>
                        </Link>
                    </li>
                    <li onClick={()=>auth.clearJWT(()=>history.push("/login/?__rd"))} className="navIconBtn">
                        <span><FiUserX style={{fontSize: "130%"}}/></span>   <span>Log out</span>
                    </li>
                </ul>
            </div>

            <div className="navIconBtn">
                <span><FiSmile /></span>   
                <span>Coo</span>
            </div>
        </nav>
    </Styles>
))

const isActive = (history, path) => {
    if (history.location.pathname.includes(path)) {
        console.log(history.location.pathname)
        return {color: "rgb(15, 116, 32)", fontWeight: "bolder", fontSize: "110%"}
    }
}


const Styles = styled.div`
top:0;
color: black;
display: flex;
position: sticky;
background-color: white;
border-right: 0.10rem solid rgba(0, 0, 0, 0.2);
.navIconBtn{
    display: flex;
    align-items: center;
    font-size:110%;
    font-weight: bold;
    min-width:8rem;
    cursor: pointer;
    z-index: 10000;
    span{
        display: block;
        &:nth-child(1){
            margin-right: 1.6em;
        }
    }
}
nav{
    flex-grow: 1;
    display: flex;
    align-items: center;
    color: inherit;
    flex-direction: column;
    div:nth-child(1){
        font-size: 200%;
        a{
            text-decoration: none;
            color: rgb(27, 214, 10);
        }
    }
    div:nth-child(2){
        flex-basis: 28rem;
        display:flex;
        ul{
            display: flex;
            flex-direction: column;
            align-self: center;
            gap: 1rem;
            li{
                list-style: none;
                a{
                    text-decoration: none;
                    color: inherit;
                    border-radius: 2px;  
                }
            }
        }
    }

    div:nth-child(3){
        justify-content: center;
        width: 70%;
        height:2.2rem;
        position: relative;
        color: #f9f9f9;
        background-color : rgb(15, 116, 32);
        border-radius: 5px;
        font-size: 140%;
        span:first-child{
            position: relative;
            top: 2px;
        }
    }
}
@media (min-width: 840px) {
    min-height: 100vh;
    flex-direction: column;
    nav {
        div:nth-child(3){
            top: 3rem;
        }
    }
}

@media (max-width: 900px){
    .navIconBtn{
        min-width: 2.3rem;
        span{
            &:nth-child(1){
                margin-right: 0;
            }
            &:nth-child(2){
                display: none;
                visibility: hidden;
            }
        }
    }
}
@media (max-width: 540px) {
    opaque: 2;
    flex-direction: row;
    height: 5vh;
    background-color: white;
    overflow-x: hidden;
    color: black;
    bottom: -1px;
    border-top: 1px solid rgba(0,0,0,0.4);
    box-shadow: 3px 0 5px 4px rgba(150, 140, 140, 0.993);
    nav {
        z-index: 100;
        flex-direction: row;
        div:nth-child(1){
            visibility: hidden;
            display: none;
        }
        div:nth-child(2){
            flex-grow:1;
            ul{
                flex-direction: row;
                flex-grow:1;
                justify-content: space-between;
            }
        }
        div:nth-child(3){
            visibility: hidden;
            display: none;
        }
    }
}
`

export default Menu;