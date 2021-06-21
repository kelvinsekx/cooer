import React, {useEffect, useState} from "react";
import auth from "../helpers/auth.helper"
import {Redirect} from "react-router-dom"
import {READ, FOLLOW, UNFOLLOW} from "./../apis/user/api-user";
import {LISTBYUSER} from "./../apis/gist/api-gist";

import ProfileHeader from "./profileHeader"

const PROFILE = ({match})=> {
    const [st, setSt] = useState(true);
    const [user, setUser] = useState({
        name: "",
        username: "",
        bio: "",
        join: new Date(),
        followers: [],
        following: []
    });
    const [coos, setCoos] = useState([])
    const [redirectToSignin, setRedirectToSignin] = useState(false);

    useEffect(()=> {
        const abortController = new AbortController;
        const signal = abortController.signal;
        const jwt = auth.isAuthenticated()

        READ({userId: match.params.userId}, {token: jwt.token}, signal).then(data => {
            if (data && data.error){
                console.log(data.error)
                setRedirectToSignin(true)
            }else {
                setUser(data)
            }
        });

        LISTBYUSER(match.params.userId, signal,
            { token: jwt.token}).then((res) => {    
            if (res.error) {      
                console.log(res.error)    
            } else {     
                setCoos(res);   
            }    
        }).then(()=>setSt(false))

        return function cleanup () {
            abortController.abort()
        }
    }, [match.params.userId])

    //console.log(user) 
    if(redirectToSignin) {
        return <Redirect to="/?=pleaseSignin" />
    }

    let handleFollow = function(){
        const jwt = auth.isAuthenticated()
        let fAPI;
        if(user.followers.some(e=>e._id == jwt.user._id)){
            fAPI = UNFOLLOW
        }else{
            fAPI = FOLLOW
        }
        fAPI({userId: jwt.user._id}, {token: auth.isAuthenticated().token}, user._id).then(data => {
            if (data.error){
                console.log(data.error)
                setUser({...user, error: data.error})
                console.log(user.following.length, user.following)
            }else {
                setUser({...user, ...data, following: !user.following})
            }
        })
    };

    let loadCoos = (user, signal) => { 
        LISTBYUSER(user.username, signal,
            { token: auth.isAuthenticated().token}).then((data) => {    
            if (data.error) {      
                console.log(data.error)    
            } else {   
                //console.log(data) ;  
                return setUser({...user, coos: data});    
            }    
        })
    }

    // const photoUrl = user._id      
    // ? `/_v1/api/users/photo/${user._id}?${new Date().getTime()}` : "no Img"

    return (
        <>
            {st ? (<div/>) :
            (<div>
                <ProfileHeader 
                    getCoos = {loadCoos}
                    follow={handleFollow}
                    coos={coos}
                    user={user} 
                    jwt={auth.isAuthenticated()}
                    profileImage={`/_v1/api/users/u/photo/${user.username}?${new Date().getTime()}`}
                />
            </div>)}
        </>
    )
}
export default PROFILE;