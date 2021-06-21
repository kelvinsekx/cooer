import React, {useEffect, useState} from "react";
import styled from "styled-components";
import auth from "./../helpers/auth.helper";
import {READ, UPDATE} from "./../apis/user/api-user"

import { BsBriefcaseFill, BsPersonCheck, BsPersonFill, BsPhone } from "react-icons/bs";

const EDIT = ({match}) => {
    const [user, setUser] = useState({error: ""});

    const handleChange = (e)=> {
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
                setUser(data)
            }
        }).then(()=> setTimeout((g)=>g, 25));

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

    return (
<Styles>
<div>
    <form onSubmit={(e)=> e.preventDefault()}>
        <div>Profile Image</div>
        <label htmlFor="icon-button-file">
        <input 
            accept="image/*" 
            type="file"       
            onChange={(e)=>{
                console.log(e.target.files)
                setUser({...user, photo: e.target.files[0]})}}       
            style={{display:'none'}}       
            id="icon-button-file" 
        />
            <span>Upload Photo</span>
            <small style={{color: 'rgb(27, 214, 10)'}}>    
                {user.photo ? user.photo.name : ''}
            </small>
        </label>
        <div className="edt">
            <div><BsBriefcaseFill style={{fontSize: "2rem", color: "rgb(27, 214, 10)"}}/></div>
            <div>
                <span>Bio</span>
                <span>
                <input 
                    value={user.bio} 
                    name="bio"
                    onChange={handleChange} /></span>
            </div>
        </div>
        <div className="edt">
            <div><BsPersonFill style={{fontSize: "2rem", color: "rgb(27, 214, 10)"}}/></div>
            <div>
                <span>Name</span>
                <span><input 
                value={user.name} 
                name="name"
                onChange={handleChange}/></span>
            </div>
        </div>
        <div className="edt">
            <div><BsPersonCheck style={{fontSize: "2rem", color: "rgb(27, 214, 10)"}}/></div>
            <div>
                <span>Anonymous Name</span>
                <span><input 
                value={user.anonymousname} name="anonymousname" 
                onChange={handleChange}/></span>
                <span id="footer">This will be used when you make anonymous comments</span>
            </div>
        </div>
        <div className="edt">
            <div><BsPhone style={{fontSize: "2rem", color: "rgb(27, 214, 10)"}}/></div>
            <div>
                <span>Telephone</span>
                <span><input 
                value={user.telephone} 
                name="telephone" 
                onChange={handleChange}/></span>
            </div>
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </form>
</div>
</Styles>
    )
}

const Styles = styled.div`
div{
    form {
        div.edt{
            display: flex;
            min-height: 4rem;
            div:nth-child(1){
                flex-basis: 4rem;
            }
            div:nth-child(2){
                display: flex;
                flex-direction: column;
                input{
                    border: none;
                    min-height: 2rem;
                    min-width: 15rem;
                }
            }
        }
    }
}
`

export default EDIT;