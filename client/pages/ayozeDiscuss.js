import React, { useEffect, useState} from "react";
import {READ} from "../apis/ayoze/ayoze-api";
import auth from "../helpers/auth.helper";
import AyozeChat from "./../components/ayoze/chats"

const AYOZEDISCUSS = ({match}) => {
    const [gists, setGists] = useState({})

    useEffect(()=> {
        let credentials = auth.isAuthenticated().token,
            abortController = new AbortController(),
            params= match.params.gossipId;
        READ(params, credentials, abortController.signal).then(data => {
            if (data.error){
                console.log(data.error)
            } else {
                console.log(data)
                setGists(data)
            }
        });

        return function clean(){
            return abortController.abort()
        }
    }, [])
    return (
        <div>
            <h1>{gists.text}</h1>
            <p>{(new Date(gists.created).toLocaleTimeString())}</p>
            <AyozeChat chats={gists.reactions} />
        </div>
    )
};

export default AYOZEDISCUSS;