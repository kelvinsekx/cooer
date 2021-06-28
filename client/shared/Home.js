import React from "react";
import HomeBanner from "../components/homeBanner"
import LogForm from "../components/logs";
import {HomeStyled as Styles} from "./home.styled"
import {Redirect} from "react-router-dom"

const HOME = (props) => {
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

export default HOME;