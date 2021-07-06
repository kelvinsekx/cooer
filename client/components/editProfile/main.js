import React from "react"
import EDITABLE from "./editable"
import { BsBriefcaseFill, BsPersonCheck, BsPersonFill, BsPhone } from "react-icons/bs";
import styled from "styled-components";


const editInfo = (user)=>[
    {
        icon: BsBriefcaseFill,
        name: 'bio',
        bio: user.bio
    },
    {
        icon: BsPersonFill,
        name: 'Name',
        bio: user.name
    },
    {
        icon: BsPersonCheck,
        name: 'Anonymous Name',
        bio: user.anonymousname
    },
    {
        icon: BsPhone,
        name: 'Telephone',
        bio:user.telephone
    }
]

const EDITPROFILE_COMPONENT = ({handleChange, user, handleSubmit, fileHandler})=> 
<Styles>
    <form onSubmit={(e)=> e.preventDefault()}>
        <div>Profile Image</div>
        <label htmlFor="icon-button-file">
        <input 
            accept="image/*" 
            type="file"       
            onChange={fileHandler}       
            style={{display:'none'}}       
            id="icon-button-file" 
        />
            <span>Upload Photo</span>
            <small style={{color: 'rgb(27, 214, 10)'}}>    
                {user.photo ? user.photo.name : ''}
            </small>
        </label>
        
        <button onClick={handleSubmit}>Save</button>
    </form>
</Styles>;

const Styles = styled.div`
form{
 button {
  border: 1px solid rgb(7, 454,50);
  color: white;
  width: 6rem;
  font-size: 1.2rem;
  background-color: rgb(7, 454, 50); 
 }
}
`
export default EDITPROFILE_COMPONENT;
