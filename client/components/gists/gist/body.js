import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import { FiHeart, FiCompass, FiCopy, FiThumbsUp
} from "react-icons/fi";
import $ from "./../../../helpers/gen.helpers"
import { BsHeartFill} from "react-icons/bs"

import BodyPrinter from "./bodyPrinter";

const BODY = ({info, actions, gist})=> {
    let someText = info.text.substr(0, 20)
    const quotesLink = $.getLink(someText)
    console.log(gist)
    return <Styles>
    <div id="gistBody">
        <div className="gistText">
            <BodyPrinter text={info.text} /> 
        </div>
        <div className="gistInfo">
            <div className="gistActors">
                <div onClick={actions.clickLike}>
                    <span>{info.likes}</span>
                    <span style={{top: "2.3px", fontSize: "77%"}}>
                        {actions.like ? <BsHeartFill style={{color: "red"}}/>: <FiHeart style={{color: "rgba(350, 02, 09, 0.34)"}}/>}
                    </span>
                </div>
                <div>
                    <span>
                        {info.commentNumber}
                    </span>
                    <span style={{top: "2px", fontSize: "90%"}}>
                        <Link 
                            to={{
                                pathname:`/${info.pigeon}/${quotesLink}/comments/${info.id}`,
                                state: {gist}
                            }}><FiCompass /></Link>
                    </span>
                </div>
    
                <div>
                    <span>
                        68
                    </span>
                    <span>
                    <FiCopy />
                    </span>
                </div>
    
                <div>
                    <span>
                        6k
                    </span>
                    <span>
                    <FiThumbsUp />
                    </span>
                </div>
            </div>
        </div>
    </div>
    </Styles>
}


const Styles = styled.div`
flex-grow: 1;
div#gistBody {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.45em;
    div.gistInfo{
        display: flex;
        font-size: 1.2rem;
        div.gistActors{
            flex-basis: 20rem;
            display: flex;
            justify-content: space-between;
            div{
                z-index: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                min-width: 2rem;
                span{
                    font-size: 94%;
                    display: inline-block;
                    padding-left: 0.1em;
                    cursor: pointer;
                    &:nth-child(1){
                        font-size: 90%;
                    }
                    &:nth-child(2){
                        position: relative;
                        top: 0.15em;
                        font-size: 80%;
                    }
                }
            }
        }
    }
}

@media (max-width: 540px){
    div#gistBody {
        div.gistInfo{
            div.gistActors{
                flex-basis: 15rem;
            }
        }
    }
}

@media (min-width: 900px) {
    div#gistBody {
        div.gistInfo{
            div.gistActors{
                flex-basis: 26rem;
            }
        }
    }
}
`

export default BODY;