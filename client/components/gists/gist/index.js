import React from "react";
import styled from "styled-components"
import auth from "../../../helpers/auth.helper"
import { LIKE, UNLIKE } from "../../../apis/gist/api-gist";

import DPHEADER from "./Dpheader";
import BODY from "./body"


const {useState, useEffect} = React;
const GIST = ({payload}) => {
    let jwt = auth.isAuthenticated();
    const [gist, setGist] = useState({...payload, like: checkIfLiked(payload.likes)})

    useEffect(()=> {
        if(payload !== gist){
            console.log("what happened")
            setGist(payload)
        }
    }, [payload])

    function checkIfLiked(likes) {
        if(likes == undefined)return;
        let match = likes.indexOf(jwt.user._id) !== -1;
        return match
    }

    const clickLike = () => {
        let callApi = gist.like ? UNLIKE : LIKE;
        callApi({userId: jwt.user._id}, {token: jwt.token}, gist._id).then(data => {
            if (data.error){
                console.log(data.error);
            }else {
                console.log(data)
                setGist({...data, like: !gist.like})
            }
        })
    }

    function replacePostedBy(gist, v){
        if (gist.postedBy !== undefined)return gist.postedBy[v]
        else return "remi"
    }

    let postedBy = replacePostedBy(gist, 'name'),
     created = gist.created,
     text = gist.text,
     pigeon = replacePostedBy(gist, 'username'),
     commentNumber = gist.comments.length,
     like= gist.like
    ;

return (
    <Styles>
        <div className="h--wrapper">
            <div id="aside">
                <span id="userAvatar"><img src={`/_v1/api/users/u/photo/${pigeon}?${new Date().getTime()}`} /></span>
            </div>
            <div id="rest">
                <DPHEADER info={{ postedBy, created, pigeon}}/>
                <div className="bd">
                    <BODY 
                        info={{text, likes: gist.likes.length, commentNumber,  pigeon,
                    id: gist._id}} 
                    actions={{clickLike, like}} 
                    gist={gist}/>
                </div>
                {/* <ENGAGE payload={{ handleChange, doComment, comm, commentNumber}} /> */}
            </div>
        </div>
    </Styles>
)}

const Styles = styled.div`
border-top: 0.10rem solid rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;
min-height: 6rem;
padding: 0.3em 0;
div.h--wrapper {
    flex-grow: 1;
    display: flex;
    align-items: top;
    div#aside {
        width:19%;
        display:flex;
        justify-content: center;
        span#userAvatar {
            display: inline-block;
            align-self: center;
            width: 3.5rem;
            max-height: 3.5rem;
            border-radius: 100%;
            box-shadow: 0 0 0 1.4px #f2f2f2;
            overflow: hidden;
            img{
                width: 100%;
                height: auto;
            }
        }
    }
    div#rest {
        width:80%;
    }
}

@media (min-width: 600px) {
    div.h--wrapper {
        div#aside {
            width:17%;
            justify-content: center;
            span#userAvatar {
                width: 4rem;
            }
        }
    }   
}
`

export default GIST;