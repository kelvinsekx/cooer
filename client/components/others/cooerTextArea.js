import React, {useState, useRef} from "react";
import {CREATE} from "./../../apis/gist/api-gist";
import styled from "styled-components";

const CooerTextArea = ({addGist, jwt}) => {
    const [text, setText] = useState("");
    const [values, setValues] = useState({
        photo: "",
        error: "",
        user: {}
    });

    const handleChange = (e)=> {
        setText( e.target.value);
    }

    const clickPost = () => {
        let gistData = new FormData();
        gistData.append("text", text)
        gistData.append("photo", values.photo)
        CREATE({userId: jwt.user.username}, 
            {token: jwt.token}, gistData).then(data => {
                if (data.error) {
                    setValues({...values, error: data.error})
                } else {
                    setText("")
                    addGist(data)
                }
        })
    }
    return <Styles>
        <div>
            <textarea
                onChange={handleChange} 
                placeholder="what's on your mind?"
                name={'text'}
                value = {text} />
        </div>
        <button onClick={clickPost}>Coo</button>
    </Styles>
};

const Styles = styled.div`
    width: 95%;
    margin: 0 auto;
    //border: 1px solid red;
    div {
        padding: 1rem 0 0.5rem 0;
        textarea{
            border: 1px solid rgba(0,0,0,0.3);
            width: 100%;
            padding: 0.2rem 1rem;
            border-radius: 5px;
            &::placeholder{
                color: #33333;
                font-size: 120%;
                font-weight: bold;
            }
            &:focus {
                border: none !important;
            }
        }
    }
    button {
        display: block;
        color: #666;
        background-color : rgba(99, 292, 186, 0.8);
        border-radius: 1rem;
        border: none;
        min-width: 5rem;
        height:1.3rem;
        padding-bottom: 1.5rem;
        font-weight: bold;
        font-size: 1.1rem;
    }
`

export default CooerTextArea;