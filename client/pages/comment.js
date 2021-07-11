import React from "react";
import Gist from "./../components/gists/gist/index"
import {COMMENT, LIST_A_FEED} from "./../apis/gist/api-gist"
import auth from "./../helpers/auth.helper"
import { getStateFromProps } from "../helpers/react.helpers";
import TxtLoading from "./../components/loading/txtIsLoading"

const {useState, useEffect} = React;
const Comment = (props)=> {
    const jwt = auth.isAuthenticated();
    const prevState = getStateFromProps(props.location, "gist");
    
    const [gistInfo, setGistInfo] = useState(prevState)
    const [comm, setComm] = useState("")


    useEffect(()=> {

        const abort = new AbortController()
        const signal = abort.signal
        LIST_A_FEED(props.match.params.commentId, signal).then(res => {
            if(res.error){
                console.log(res.error);
            }else {
                const [data] = res;
                //console.log(data)
                setGistInfo(data)
            }
        })

        return function cleanUp(){
            abort.abort()
        }
    }, [])
    
    const handleChange = (e) => {
        return setComm(e.target.value)
    }

    const doComment = ()=> {
        return COMMENT({userId: jwt.user._id}, {token: jwt.token}, gistInfo._id, {text: comm}).then(res => {
             if (res.error) {
                 console.log(res.error)
             }else {
                setComm("")
                 setGistInfo(res);
             }
         }); 
    }

    return (
        (gistInfo !== null ) ?
        (<div>
         <Gist payload ={gistInfo} />
         <hr />
            <div>
                <input 
                    onChange = {handleChange}
                    value={comm}
                    />
                <button onClick={doComment}>gist</button>
             </div>
             <div>
                 {gistInfo.comments.map((com, index)=> <div key={index}>
                     <p>{com.text}</p>
                 </div>)}
             </div>
        </div>) :
        <TxtLoading />
    )
};

export default Comment;