import React from "react";
import styled from "styled-components";
import HomeBanner from "../components/homeBanner"
import LogForm from "../components/logs";
import {Redirect} from "react-router-dom"

const HOME = (props) => {
        console.log(props)
        return (
            <div>
                <Styles>
                    <HomeBanner />
                    <LogForm />
                </Styles>
            </div>
        )

}

export const hm = ()=> <Redirect to ="/home" />

const Styles = styled.div`
display: flex;
width: 80vw;
margin: 8% auto;
align-items: center;
//border: 2px solid red;
@media (max-width: 900px){
    margin-top:0px;
    flex-direction: column;
    width: 99.5vw;
    gap: 3rem;
}
`

export default HOME;