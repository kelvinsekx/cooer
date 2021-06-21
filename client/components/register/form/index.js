import React, {useState} from "react";
import {StyledRegisterForm as Styles} from "./form.styled"

import {Redirect, Link} from "react-router-dom"
import INPUT from "./input";
import RADIO  from "./radioInput"

import {CREATE} from "../../../apis/user/api-user"


const REGISTERFORM = ()=>
{
    const [values, setValues] = useState({
        name: "",
        username: "",
        email: '',
        anonymousName: "",
        telephone: "",
        password: '',
        securityQuestion: "",
        securityAnswer: "",
        gender: "",
        error: '',
        open: false
    });

    function handleChange(name){
        return function(event){
            console.log(event.target.value)
            return setValues({...values, [name]: event.target.value})
        }
    }

    function submit () {
        // console.log(props.location)
        const USER = {
            name: values.name || undefined,
            username: values.username || undefined,
            anonymousName: values.anonymousName || '',
            email: values.email || undefined,
            telephone: values.telephone || undefined,
            password: values.password || undefined,
            securityQuestion: values.securityQuestion || '',
            securityAnswer: values.securityAnswer || undefined,
            gender: values.gender || undefined,
        }
        console.log(USER)

        CREATE(USER).then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({...values, error: "", open: true})
            }
        })
    }

    const {from} = {
        from: {pathname: "/"}
    }
    const {open} = values;
    if (open) {
        return <Redirect to={from} />
    }
return (
<Styles>
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <fieldset>
                <div><legend>Join the new world, it's quick</legend></div>
            <div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                   <INPUT 
                        placeholder="name"
                        w="12"
                        name='name'
                        handleChange={handleChange}
                    />
                   <INPUT 
                        placeholder="username" w="12"
                        name='username'
                        handleChange={handleChange}
                    /> 
                </div>
            </div>
            <div>
                <div style={{display: "flex",justifyContent: "space-between", borderBottom: "1px solid rgba(150, 140, 140, 0.223)", width: "26rem" }}>
                   <INPUT 
                        placeholder="email" 
                        w="14"
                        name='email'
                        handleChange={handleChange}
                    />
                   <INPUT 
                        placeholder="anonymous name" 
                        w="9"
                        name='anonymousName'
                        handleChange={handleChange}
                    /> 
                </div>
            </div>
            <div>
                <div style={{display: "flex",justifyContent: "space-between", width: "25rem" }}>
                   <INPUT 
                        placeholder="telephone" w="8" 
                        type="tel"
                        name='telephone' 
                        handleChange={handleChange}
                    />
                   <INPUT
                        placeholder="password" w="12" 
                        type="password" minLength="8"
                        name='password'
                        handleChange={handleChange}
                    /> 
                </div>
            </div>

            <div>
                <div style={{display: "flex",justifyContent: "space-around", borderBottom: "1px solid rgba(150, 140, 140, 0.223)" }}>
                   <INPUT 
                        placeholder="security question" 
                        w="12" 
                        readOnly="true"
                        name='securityQuestion'
                        handleChange={handleChange}
                    />
                   <INPUT 
                        placeholder="answer" 
                        w="12"
                        name='securityAnswer'
                        handleChange={handleChange}
                    /> 
                </div>
            </div>
            <div>
                Gender
                <div style={{display: "flex",justifyContent: "space-around", width: "25rem" }}>
                    <RADIO 
                        value="Female"  
                        ID="female" 
                        handleChange={handleChange}
                        name="gender"
                    />
                    <RADIO 
                        ID="male" 
                        value="Male" 
                        handleChange={handleChange}
                        name="gender"
                    />
                    <RADIO 
                        ID="custom" 
                        value="Custom" 
                        handleChange={handleChange}
                        name="gender"
                    />
                </div>
            </div>
            {values.error && (
                <div>{values.error}</div>
            )}
            <button type="submit" onClick={submit}>Create Account</button>
            </fieldset>
        </form>
    </div>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div>OR</div>
        <div><Link to="/">Log In</Link></div>
    </div>
</Styles>
)
}

export default REGISTERFORM;