import React, {useEffect, useState} from "react"
import auth from "./../helpers/auth.helper"
import {READ, UPDATE} from "./../apis/user/api-user"

import EDITPROFILE_COMPONENT from "../components/editProfile/main";

const EDIT = ({match}) => {
    const [user, setUser] = useState({error: ""});

    const handleChange = (e)=> {
        console.log(user)
        setUser({...user, [e.target.name]: e.target.value});
    }

    useEffect(()=> {
        const abortController = new AbortController;
        const signal = abortController.signal;
        const jwt = auth.isAuthenticated()

        READ({userId: match.params.userId}, {token: jwt.token}, signal).then(data => {
            if (data && data.error){
                console.log(data.error)
                setRedirectToSignin(true)
            }else {
                setUser({...data, photo: ""})
            }
        }).then(()=> setTimeout((g)=>g, 5));

        return function cleanup () {
            abortController.abort()
        }
    }, [])

    const handleSubmit = () => {
        const jwt = auth.isAuthenticated()    
        let userData = new FormData()    
        user.name && userData.append('name', user.name)    
        user.telephone && userData.append('telephone', user.telephone)    
        user.bio && userData.append('bio', user.bio)    
        user.photo && userData.append('photo', user.photo) 
        user.anonymousname && userData.append('anonymousname', user.anonymousname)    
        UPDATE( match.params.userId, jwt.token, userData).then((data) => {      
            if (data && data.error) { 
                console.log(data.error)       
                setUser({...data, error: data.error})      
            } else {
                console.log(data)       
                 setUser({...data, redirectToProfile:true})      
                }    
    })}

    return <EDITPROFILE_COMPONENT
            fileHandler= {
                (e)=>{
                    console.log(e.target.files)
                    setUser({...user, photo: e.target.files[0]})}
            }
            handleChange = {handleChange} 
            user = {user}
            handleSubmit = {handleSubmit}
        />
}

export default EDIT;