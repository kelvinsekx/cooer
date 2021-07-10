import React, {useState} from "react";
import styled from "styled-components"
import auth from "../../../helpers/auth.helper"
import { LIKE, UNLIKE } from "../../../apis/gist/api-gist";

import DPHEADER from "./Dpheader";
import BODY from "./body"
//import ENGAGE from "./engage"

const GIST = ({gist}) => {
    const jwt = auth.isAuthenticated()


    const checkIfLiked = (likes) => {
        if(likes == undefined)return;
        let match = likes.indexOf(jwt.user._id) !== -1;
        return match
    }

    const clickLike = () => {
        let jwt = auth.isAuthenticated()
        let callApi = values.like ? UNLIKE : LIKE;
        callApi({userId: jwt.user._id}, {token: jwt.token}, gist._id).then(data => {
            if (data.error){
                console.log(data.error);
            }else {
                setValues({...values, like: !values.like, likes: data.likes.length})
            }
        })
    }

    const [values, setValues] = useState({
        like: checkIfLiked(gist.likes),
        likes: gist.likes.length,
        comments: gist.comments
    })

    let postedBy = gist.postedBy.name,
     created = gist.created,
     text = gist.text,
     pigeon = gist.postedBy.username,
     commentNumber = gist.comments.length,
     likes= values.likes,
     like= values.like
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
                        info={{text, likes, commentNumber, username: pigeon,
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
div.h--wrapper {
    flex-grow: 1;
    display: flex;
    div#aside {
        flex-basis: 5rem;
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
        flex-grow: 1;
    }
}
`

export default GIST;